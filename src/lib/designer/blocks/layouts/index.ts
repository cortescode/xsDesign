import type { Editor } from "grapesjs";
import loadHeader from "./header";
import loadHero from './hero'


export default function loadLayouts(editor: Editor) {
    loadHeader(editor)
    loadHero(editor)
}