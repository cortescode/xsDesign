import type { Editor } from 'grapesjs';
import {
	cmdClear,
	cmdDeviceDesktop,
	cmdDeviceMobile,
	cmdDeviceTablet,
	cmdExport,
	oas,
	obl,
	opa,
	osm
} from '$lib/designer/consts';
import openImport from './openImport';

import { setRouteNameOnPanel } from "$lib/designer/panels";
import { website as site } from "$lib/stores/website";

import loadExportCommand from './download_and_export';
import type { Website } from '$lib/interfaces/Website';

export default function loadCommands(editor: Editor) {
	const { Commands } = editor;
	const clearTextConfirm = 'Are you sure you want to clear the canvas?';

	let website: Website;
	site.subscribe(new_website => website = new_website)

	openImport(editor)

	Commands.add(cmdDeviceDesktop, {
		run: ed => {
			ed.setDevice('Desktop');
		},
		stop: () => { },
	});
	Commands.add(cmdDeviceTablet, {
		run: ed => {
			ed.setDevice('Tablet')
		},
		stop: () => { },
	});
	Commands.add(cmdDeviceMobile, {
		run: ed => {
			ed.setDevice('Mobile portrait')
		},
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

	loadExportCommand(editor)

	const openStyleManagerEvent = new Event("open-styles")
	const closeStyleManagerEvent = new Event("close-styles")
	Commands.add(osm, {
		run: editor => {
			document.dispatchEvent(openStyleManagerEvent)
		},
		stop: () => {
			document.dispatchEvent(closeStyleManagerEvent)
		},
	})

	const openBlocksEvent = new Event("open-blocks")
	const closeBlocksEvent = new Event("close-blocks")
	Commands.add(obl, {
		run: editor => {
			document.dispatchEvent(openBlocksEvent)
		},
		stop: () => {
			document.dispatchEvent(closeBlocksEvent)
		},
	})

	editor.on('block:drag', (block) => { 
		const panels = editor.Panels;
		const openBl = panels.getButton('blocks', obl)
		const active = openBl?.set('active', false) 
		document.dispatchEvent(closeBlocksEvent)
	});

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