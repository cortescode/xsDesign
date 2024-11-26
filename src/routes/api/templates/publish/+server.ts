import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function POST({ request }) {
    try {
        const json_data = await request.json();
        const website_id = json_data.website_id;
        const data = json_data.data;
        const jsonContent = JSON.stringify(data, null, 2);
        const filePath = path.join(__dirname, '../../../../../templates', `${website_id}.json`);

        // Ensure the directory exists
        const directoryPath = path.dirname(filePath);
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
        }

        // Write the file
        fs.writeFileSync(filePath, jsonContent, 'utf8');
        
        return json({ success: true });
    } catch (exception) {
        console.log(exception);
        //@ts-ignore
        return json({ success: false, error: exception?.message || 'An error occurred' });
    }
}
