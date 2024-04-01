import type { Editor } from "grapesjs";
import loadAtoms from './atoms/index'
import loadMolecules from './molecules/index'
import  loadLayouts from './layouts/index'
import loadDisplays from './displays'

export default function loadBlocks(editor: Editor) {
    loadAtoms(editor)
    loadMolecules(editor)
    loadDisplays(editor)
    loadLayouts(editor)


	// Listen to the 'component:add' event
    editor.on('component:add', (component) => {
		editor.select(component)
	})
}