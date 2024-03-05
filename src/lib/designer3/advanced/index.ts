import type { Editor } from 'grapesjs';
import loadHeader from './sections/header';
import loadMap from './atoms/map';
import loadCustomCode from './atoms/custom-code';



export default function loadAdvanced(editor: Editor) {
	loadHeader(editor)
	loadMap(editor)
	loadCustomCode(editor)
}