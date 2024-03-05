import type { Editor } from "grapesjs";
import loadGrid from "./grid";
import loadFlexColumns from "./flex";



export default function loadLayouts(editor: Editor) {
    loadGrid(editor)
    loadFlexColumns(editor)
}