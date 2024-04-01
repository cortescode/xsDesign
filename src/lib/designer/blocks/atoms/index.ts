import type { Editor } from "grapesjs";
import loadCustomCode from "./custom-code";
import loadLinks from "./links";
import loadMedia from "./media";
import loadText from "./text";
import loadMap from "./map";


export default function loadAtoms(editor: Editor) {
    loadText(editor)
    loadLinks(editor)
    loadMedia(editor)
    loadCustomCode(editor)
    loadMap(editor)
}