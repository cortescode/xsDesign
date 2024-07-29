import type { Editor } from "grapesjs";
import addLinks from "./links";


export default function loadComponents(editor: Editor) {
    addLinks(editor)
}