import { Readable } from 'stream';
import { Storage } from '@google-cloud/storage';
import { GOOGLE_APPLICATION_CREDENTIALS_JSON } from "$env/static/private"

export async function GET() {
    console.log("get")
}


export async function POST({ params, request }) {
    
    const result = {
        data: []
      }
    let formData = await request.formData()
    let files = formData.getAll('files[]');
    
    
    let file: File | any

    for(file of files) {
        let file_obj = await storeFile(params.website_id, file)
        result["data"].push(file_obj)
    }
    
    
    return new Response(JSON.stringify(result))
    
}


async function storeFile(website_id:string, file: File) {
    
    let fileBuffer = await file.arrayBuffer()
    const bucketName = 'xsdesign';
    const storage = new Storage({
        projectId: "xs-agency",
        credentials: JSON.parse(GOOGLE_APPLICATION_CREDENTIALS_JSON),
        
    });

    const bucket = storage.bucket(bucketName);
    const filePath = `${website_id}/${file.name}`;

    
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




// Helper function to convert a ReadableStream to a Buffer
/* async function streamToBuffer(stream: Readable): Promise<Buffer> {
    const chunks: Uint8Array[] = [];
    return new Promise((resolve, reject) => {
        stream.on('data', (chunk: Uint8Array) => chunks.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(chunks)));
        stream.on('error', (error: Error) => reject(error));
    });
}

 */
/* 
{
  data: [
    'https://.../image.png',
    // ...
    {
      src: 'https://.../image2.png',
      type: 'image',
      height: 100,
      width: 200,
    },
    // ...
  ]
}
*/