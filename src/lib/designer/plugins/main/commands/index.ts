import type { Editor } from 'grapesjs';
import type { PluginOptions } from '..';
import {
	cmdClear,
	cmdDeviceDesktop,
	cmdDeviceMobile,
	cmdDeviceTablet,
	oas,
	opa
} from '../consts';
import openImport from './openImport';

export default function loadCommands(editor: Editor, config: Required<PluginOptions>) {
	const { Commands } = editor;
	const clearTextConfirm = 'Are you sure you want to clear the canvas?';

	openImport(editor, config);

	Commands.add(cmdDeviceDesktop, {
		run: ed => ed.setDevice('Desktop'),
		stop: () => { },
	});
	Commands.add(cmdDeviceTablet, {
		run: ed => ed.setDevice('Tablet'),
		stop: () => { },
	});
	Commands.add(cmdDeviceMobile, {
		run: ed => ed.setDevice('Mobile portrait'),
		stop: () => { },
	});
	Commands.add(oas, {
		run: editor => {
			let am = editor.AssetManager
			am.open()
		},
	});

	Commands.add('image-editor', {
		run: editor => {
			let am = editor.AssetManager
			const selectedComponent = editor.getSelected()
			am.open({
				target:selectedComponent,
				select(asset) {
					if (selectedComponent && selectedComponent.is('image')) {
					  // Set the new src to the selected component
					  selectedComponent.set('src', asset.get('src'));
					  // Close the asset manager
					  am.close();
					}
				  }
			})
		},
	})

	const openPagesEvent = new Event("open-pages")
	const closePagesEvent = new Event("close-pages")
	Commands.add(opa, {
		run: editor => {
			document.dispatchEvent(openPagesEvent)
		},
		stop: () => {
			document.dispatchEvent(closePagesEvent)
		},
	})

	Commands.add(cmdClear, (e: Editor) => confirm(clearTextConfirm) && e.runCommand('core:canvas-clear'));
}