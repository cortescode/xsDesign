import type { Editor } from "grapesjs"
import loadToggle from "./common/toggle-button/component"
import loadHeaderWrapper from "./common/header-wrapper/component"
import loadHeaderNav from "./common/header-nav/component"
import loadDefaultHeader from "./default-header/index"
import loadCtaHeader from "./cta-header/index"


export default function loadHeaders(editor: Editor) {
    loadToggle(editor)
    loadHeaderNav(editor)
    loadHeaderWrapper(editor)

    loadDefaultHeader(editor)
    loadCtaHeader(editor)
}