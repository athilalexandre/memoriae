import { NextRequest, NextResponse } from 'next/server';
import { createExperience, uploadPhoto } from '@/lib/firebase';
import { requireAuth } from '@/lib/session';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await requireAuth();
    
    const formData = await req.formData();
    const message = formData.get('message') as string;
    const title = formData.get('title') as string;
    const musicUrl = formData.get('musicUrl') as string;
    const createdBy = formData.get('createdBy') as string;
    const layout = formData.get('layout') as string;
    const photos = formData.getAll('photos') as File[];
    const backgroundPhotos = formData.getAll('backgroundPhotos') as File[];

    // Validate required fields
    if (!message || !musicUrl || !createdBy || !title || !layout) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Validate message length
    if (message.length > 600) {
      return NextResponse.json({ message: 'Message exceeds maximum length of 600 characters' }, { status: 400 });
    }

    // Validate and upload main photos
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

    // Validate and upload background photos
    const backgroundPhotoUrls: string[] = [];
    for (const photo of backgroundPhotos) {
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
        backgroundPhotoUrls.push(photoUrl);
      }
    }

    // Create experience in Firestore
    const experienceId = await createExperience({
      message,
      title,
      musicUrl,
      photos: photoUrls,
      backgroundPhotos: backgroundPhotoUrls,
      createdBy,
      layout,
    });

    return NextResponse.json({ id: experienceId }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating experience:', error);
    
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
    }
    
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}