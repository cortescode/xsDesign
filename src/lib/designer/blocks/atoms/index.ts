import type { Editor } from "grapesjs";
import loadCustomCode from "./custom-code";
import loadLinks from "./links";
import loadMedia from "./media";
import loadText from "./text";
import loadMap from "./map";
import loadSections from "./sections";



export default function loadAtoms(editor: Editor) {
    loadText(editor)
    // loadSections(editor)
    loadLinks(editor)
    loadMedia(editor)
    loadCustomCode(editor)
    loadMap(editor)

    
    const typographySector = editor.StyleManager.getSector('Typography')
    typographySector?.set('visible', false)
}