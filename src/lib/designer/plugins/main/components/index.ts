import type { Editor } from "grapesjs";
import addLinks from "./link";


export default function loadComponents(editor: Editor) {
    addLinks(editor)
}