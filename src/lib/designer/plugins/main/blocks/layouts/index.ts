import type { Editor } from "grapesjs";
import loadGrid from "./grid";
import loadFlexColumns from "./flexColumns";
import loadSections from "./sections";



export default function loadLayouts(editor: Editor) {
    loadSections(editor)
    loadGrid(editor)
    loadFlexColumns(editor)
}