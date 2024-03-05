import type { Editor } from "grapesjs";
import loadComponents from "./components";
import loadBlocks from "../../layouts/grid/blocks";


export default function loadLinks(editor: Editor) {
    loadComponents(editor)
    loadBlocks(editor)
}