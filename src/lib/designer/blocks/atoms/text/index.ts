import type { Editor } from "grapesjs";
import loadTextBlocks from "./blocks";
import loadTextComponents from "./components";



export default function loadText(editor: Editor) {
    const commonBlockProps = {
        'category': 'TEXT'
    }
    loadTextBlocks(editor, commonBlockProps)
    loadTextComponents(editor)

}