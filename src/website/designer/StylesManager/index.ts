import type { Editor, Plugin } from 'grapesjs';
import loadGradientSupport from './background/gradient';
import loadBackgroundStyleOptions from './background';
import loadMarginAndPadding from './dimension/marginAndPadding';
import loadDisplayPositionManager from './display/position';
import loadDisplayGridsManager from './display/grids';
import loadTextManager from './text';
import sectors from './sectors';


export default function loadStyles(editor: Editor, opts = {}) {

	loadGradientSupport(editor);

	loadBackgroundStyleOptions(editor)

	loadMarginAndPadding(editor)

	loadDisplayPositionManager(editor)

	loadDisplayGridsManager(editor)

	loadTextManager(editor)

	editor.on("component:select", (component) => {
		const { SelectorManager } = editor

		 SelectorManager.setState("")
	})

};

