import type { Editor } from "grapesjs"
import loadComponents from "./components"
import loadBlocks from "./blocks"


export default (editor: Editor) => {

    loadComponents(editor)
    loadBlocks(editor)
    
}