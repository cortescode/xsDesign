import type { Editor } from "grapesjs";
import loadHero from './hero'
import loadHeaders from "./headers";


export default function loadLayouts(editor: Editor) {
    loadHero(editor)
    loadHeaders(editor)
}