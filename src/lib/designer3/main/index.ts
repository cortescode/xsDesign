import type { Editor } from "grapesjs";
import loadPanels from "./panels";
import loadStyles from "./styles";
import loadCommands from "../commands";



export default function loadMain(editor: Editor) {
    loadPanels(editor)
    loadStyles(editor)
    loadCommands(editor)
    
}