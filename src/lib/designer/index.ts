import type { Editor } from "grapesjs";
import loadBlocks from "./blocks";
import loadCommands from "./commands";
import loadStyles from "./generalStyles";
import loadPanels from "./panels";
import loadCustomTraitsManager from "./traits";
import loadCssComposer from "./cssComposer";
import loadClassSelectorManager from "./classSelector";


export default function main(editor: Editor) {
    loadCommands(editor)
    loadPanels(editor)
    loadCssComposer(editor)
    loadStyles(editor)
    loadBlocks(editor)
    loadCustomTraitsManager(editor)
    loadClassSelectorManager(editor)
}