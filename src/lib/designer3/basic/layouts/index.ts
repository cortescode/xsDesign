import type { Editor } from "grapesjs";
import loadGrid from "./grid";
import loadFlexColumns from "./flex";
import loadSections from "./sections";



export default function loadLayouts(editor: Editor) {
    loadSections(editor)
    loadGrid(editor)
    loadFlexColumns(editor)
}