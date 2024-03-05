import type { Editor } from 'grapesjs';
import loadLinks from './atoms/links';
import loadMedia from './atoms/media';
import loadText from './atoms/text';
import loadLayouts from './layouts';


export default function loadAdvanced(editor: Editor) {
    loadLinks(editor)
    loadMedia(editor)
    loadText(editor)
    loadLayouts(editor)
    
}