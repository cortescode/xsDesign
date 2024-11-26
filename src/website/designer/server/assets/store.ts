import { Readable } from 'stream';
import { Storage } from '@google-cloud/storage';
//@ts-ignore
import { GOOGLE_APPLICATION_CREDENTIALS_JSON } from "$env/static/private";


export async function storeFile(route: string, file: File): Promise<string> {
    
    let fileBuffer = await file.arrayBuffer()
    const bucketName = 'xsdesign';
    const projectId = "xs-agency"
    
    const storage = new Storage({
        projectId: projectId,
        credentials: JSON.parse(GOOGLE_APPLICATION_CREDENTIALS_JSON),
        
    });

    const bucket = storage.bucket(bucketName);
    const filePath = `${route}/${file.name}`;

    
    try {
        const fileStream = new Readable();
        fileStream.push(new Uint8Array(fileBuffer)); // Assuming `file.buffer` contains the file data
        fileStream.push(null); 

        // Upload the file data to Google Cloud Storage
        // Create a writable stream to upload the file
        const uploadStream = bucket.file(filePath).createWriteStream({
            metadata: {
                contentType: file.type
            }
        });

        // Pipe the file data to the stream
        fileStream.pipe(uploadStream);

        // Wait for the upload to complete
        await new Promise((resolve, reject) => {
            uploadStream.on('error', reject);
            uploadStream.on('finish', resolve);
        });

        const [url] = await bucket.file(filePath).getSignedUrl({
            action: 'read',
            expires: '01-01-3000' // Adjust expiration date as needed
        });

        return url;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }

}
