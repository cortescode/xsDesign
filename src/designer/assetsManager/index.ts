import type { Editor } from "grapesjs";



export default function loadAssetsManagerExtension(editor: Editor) {
    editor.on('asset:upload:start', () => {
        console.log("Hello")
    });

    // The upload is ended (completed or not)
    editor.on('asset:upload:end', () => {
        editor.store()
    });

    
}