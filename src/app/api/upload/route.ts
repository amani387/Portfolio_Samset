import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
});

export async function POST(request: Request) {
    try {
        const { filename, contentType } = await request.json();

        // Sanitize filename
        const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '');
        const key = `projects/${Date.now()}-${sanitizedFilename}`;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Key: key,
            ContentType: contentType,
        });

        const url = await getSignedUrl(s3, command, { expiresIn: 60 });

        return NextResponse.json({ url, key });
    } catch (error) {
        console.error('S3 Upload Error:', error);
        return NextResponse.json({ error: 'Failed to generate upload URL' }, { status: 500 });
    }
}
