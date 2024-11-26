import type { Editor } from "grapesjs";
import loadBlocks from "./blocks";
import loadCommands from "./commands";
import loadStyles from "./StylesManager";
import loadPanels from "./panels";
import loadCustomTraitsManager from "./traits";
import loadCssComposer from "./cssComposer";
import loadAssetsManagerExtension from "./assetsManager";


export default function main(editor: Editor) {
    loadCommands(editor)
    loadPanels(editor)
    loadCssComposer(editor)
    loadStyles(editor)
    loadBlocks(editor)
    loadCustomTraitsManager(editor)
    loadAssetsManagerExtension(editor)
}