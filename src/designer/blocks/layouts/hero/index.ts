import type { Editor } from "grapesjs";
import loadHeroBlocks from "./blocks";
import loadHeroComponents from "./components"


export default function loadHeros(editor: Editor) {
    loadHeroComponents(editor);
    loadHeroBlocks(editor)
    
}