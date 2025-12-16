import { NextRequest, NextResponse } from 'next/server';
import { createExperience, uploadPhoto } from '../../../lib/storage';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(req: NextRequest) {
  try {

    const formData = await req.formData();
    const message = formData.get('message') as string;
    const title = formData.get('title') as string;
    const musicUrl = formData.get('musicUrl') as string;
    const layout = formData.get('layout') as string;
    const photos = formData.getAll('photos') as File[];

    // Validate required fields
    if (!message || !title || !layout) {
      return NextResponse.json({ message: 'Missing required fields: message, title, and layout are required' }, { status: 400 });
    }

    // Validate message length
    if (message.length > 1000) {
      return NextResponse.json({ message: 'Message exceeds maximum length of 1000 characters' }, { status: 400 });
    }

    // Validate and upload photos
    const photoUrls: string[] = [];
    for (const photo of photos) {
      if (photo instanceof File) {
        // Validate file size
        if (photo.size > MAX_FILE_SIZE) {
          return NextResponse.json({ message: `File ${photo.name} exceeds maximum size of 5MB` }, { status: 400 });
        }

        // Validate file type
        if (!ALLOWED_IMAGE_TYPES.includes(photo.type)) {
          return NextResponse.json({ message: `File ${photo.name} is not a valid image type` }, { status: 400 });
        }

        const photoUrl = await uploadPhoto(photo);
        photoUrls.push(photoUrl);
      }
    }

    // Create experience in local storage
    const experienceId = await createExperience({
      message,
      title,
      musicUrl: musicUrl || '',
      photos: photoUrls,
      backgroundPhotos: [], // Not used in simplified version
      createdBy: 'visitor',
      layout,
    });

    return NextResponse.json({ id: experienceId }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating experience:', error);

    if (error.message === 'Unauthorized') {
      return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
    }

    return NextResponse.json({ message: error.message || 'Internal server error' }, { status: 500 });
  }
}