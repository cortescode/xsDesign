import type { Editor } from "grapesjs";
import defaultRules from "./defaultStyles";


export default function loadCssComposer(editor: Editor) {
    editor.on('load', function() {
        editor.CssComposer.addRules(defaultRules);
    });
}