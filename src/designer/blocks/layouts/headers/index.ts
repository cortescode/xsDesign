import type { Editor } from "grapesjs"
import loadToggle from "./common/toggle-button/component"
import loadHeaderNav from "./common/header-nav/component"
import loadHeaderLogoLeft from "./header-logo-left/index"


export default function loadHeaders(editor: Editor) {
    loadToggle(editor)
    loadHeaderNav(editor)

    loadHeaderLogoLeft(editor)
}