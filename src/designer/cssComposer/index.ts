import type { Editor } from "grapesjs";
import defaultRules from "./defaultStyles";
import rules from "../templates/sites/agency/blocksStyles";




export default function loadCssComposer(editor: Editor, templateStyles = defaultRules) {
    editor.on('load', function() {
        editor.CssComposer.addRules(templateStyles);
    });
}