import { storeFile } from '$designer/server/assets/store.js';



const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB (adjust as needed)


export async function POST({ params, request }) {
    
    const result = {
        data: []
      }
    let formData = await request.formData()
    let files = formData.getAll('files[]');
    
    
    let file: File | any

    for(file of files) {
        // Check size limit
        if (file.size > MAX_FILE_SIZE) {
            return new Response(
                JSON.stringify({ error: `File ${file.name} exceeds the maximum allowed size` }),
                { status: 400 }
            );
        }


        let file_obj = await storeFile(params.website_id, file)
        
        //@ts-ignore
        result["data"].push(file_obj)
    }
    
    
    return new Response(JSON.stringify(result))
    
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