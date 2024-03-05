import type { Editor } from "grapesjs";
import loadCustomCode from "./custom-code";
import loadLinks from "./links";
import loadMedia from "./media";
import loadText from "./text";
import loadMap from "./map";
import loadSections from "./sections";



export default function loadAtoms(editor: Editor) {
    loadCustomCode(editor)
    loadLinks(editor)
    loadMedia(editor)
    loadText(editor)
    loadMap(editor)
    loadSections(editor)

    
    const typographySector = editor.StyleManager.getSector('Typography')
    typographySector?.set('visible', false)
}