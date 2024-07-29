import type { Editor } from "grapesjs";
import loadFontTypes from "./fontTypes";
import { loadTextSectorManager } from "./textSectorManager";




export default function loadTextManager(editor: Editor) {
    loadFontTypes(editor);
    loadTextSectorManager(editor)
}