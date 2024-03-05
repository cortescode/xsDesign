import type { Editor } from "grapesjs";
import loadBlocks from "./blocks";
import loadCommands from "./commands";
import loadStyles from "./generalStyles";
import loadPanels from "./panels";


export default function main(editor: Editor) {
    loadCommands(editor)
    loadPanels(editor)
    loadStyles(editor)
    loadBlocks(editor)
    
}