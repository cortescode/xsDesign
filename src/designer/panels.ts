import type { Editor } from 'grapesjs';

import { website as website_store } from '$lib/stores/website';

import {
	cmdImport,
	cmdDeviceDesktop,
	cmdDeviceTablet,
	cmdDeviceMobile,
	cmdClear,
	cmdExport,
	otm,
	oas,
	opa,
	obl,
	osm
} from './consts';
import type { Website } from '$lib/interfaces/Website';
import type { Route } from '$lib/interfaces/Route';



export default function loadPanels(editor: Editor) {
	const { Panels } = editor;
	const config = editor.getConfig();
	const swv = 'sw-visibility';
	const expt = 'export-template';
	const ola = 'open-layers';
	const ful = 'fullscreen';
	const prv = 'preview';
	const iconStyle = 'style="display: block; max-width:22px;"';


	let website: Website;

	website_store.subscribe(site => website = site)

	// config.showDevices = false;

	Panels.getPanels().reset([
		{
			id: 'routes',
			attributes: {
				class: "panel-route"
			},
			buttons: [{
				id: opa,
				command: opa,
				label: `
				<svg ${iconStyle} viewBox="0 0 24 24">
					<path fill="currentColor" transform="scale(1.18)" d="M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z"></path>
				</svg>
				<span id="route-name">/</span>
		  `,
				attributes: {
					class: "routes-button",
				}
			}],
		},
		{
			id: 'devices-c',
			buttons: [
				{
					id: cmdDeviceDesktop,
					command: cmdDeviceDesktop,
					active: true,
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
						<path fill="currentColor" d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" />
					</svg>`,
				
				},
				{
					id: cmdDeviceTablet,
					command: cmdDeviceTablet,
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`
				}, {
					id: cmdDeviceMobile,
					command: cmdDeviceMobile,
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`
				}]
		},
		{
			id: "blocks",
			buttons: [
				{
					id: obl,
					command: obl,
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
						<path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
					</svg>
					<span>Add blocks</span>
				`
				},
				{
					id: oas,
					command: () => editor.runCommand(oas),
					label: `<svg style="display: block; width:28px; height: 22px" viewBox="0 0 24 24">
						<path transform="scale(1.2)" d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645"></path>
					</svg>
					<span>Open Assets</span>
				`,
				}
			]
		},
		{
			id: 'actions',
			buttons: [
				{
					id: prv,
					command: () => {
						editor.runCommand(prv)
						const canvas = editor.Canvas.getElement();
						canvas.style.zIndex = "10"
					},
					label: `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>`
				},
				{
					id: swv,
					command: swv,
					label: `<svg viewBox="0 0 24 24">
						<path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
					</svg>`,
				}, {
					id: 'undo',
					command: () => editor.runCommand('core:undo'),
					label: `<svg viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
          </svg>`
				},
				{
					id: 'redo',
					command: () => editor.runCommand('core:redo'),
					label: `<svg viewBox="0 0 24 24">
				<path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
			</svg>`,
				}, /* {
					id: cmdClear,
					command: () => editor.runCommand(cmdClear),
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>`, 
				},*/
			]
		},
		{
			id: 'options',
			buttons: [
				{
					id: expt,
					command: () => editor.runCommand(expt),
					label: `
						<svg ${iconStyle} viewBox="0 0 24 24">
							<path d="M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3Z" style="fill: currentcolor;"></path>
        
						</svg>
						<span>View Code</span>
					`
				}, {
					id: cmdImport,
					command: () => editor.runCommand(cmdImport),
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
						<path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
					</svg>
					<span>Import Code</span>
				`,
				},
				{
					id: cmdExport,
					command: () => editor.runCommand(cmdExport),
					label: `<svg ${iconStyle} viewBox="0 0 24 24">
				<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />	
				</svg>
				<span>Export and Download</span>
			`,
				}],
		}, {
			id: 'views',
			buttons: [{
				id: osm,
				command: osm,
				active: true,
				label: `<svg ${iconStyle} viewBox="0 0 24 24">
					<path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
				</svg>
				<span>Style</span>
			`,
			}, {
				id: ola,
				command: ola,
				label: `<svg ${iconStyle} viewBox="0 0 24 24">
					<path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
				</svg>
				<span>Layers</span>
			`
			}],
		}]);


	editor.on('load', () => {

		let currentPage = editor.Pages.getSelected()


		let currentWebsite = website.routes.find(
			(route) => route.page_id == currentPage?.id
		)

		if (currentWebsite)
			setRouteNameOnPanel(currentWebsite.title)

	});
	
	editor.on('page:change', (message) => {
		setRouteNameOnPanel(message.route.title)
	})



	// On component change show the Style Manager
	editor.on('component:selected', () => {
		const openSmBtn = Panels.getButton('views', osm);
		const openLayersBtn = Panels.getButton('views', ola);
		const openBlocksBtn = Panels.getButton('blocks', obl);

		// Don't switch when the Layer Manager is on or
		// there is no selected component
		if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
			openSmBtn?.set('active', true);
		}
		if(openBlocksBtn?.get('active')) {
			openBlocksBtn?.set('active', false)
			document.dispatchEvent(new Event("close-blocks"))
		}
	});
}

export function setRouteNameOnPanel(route_name: string) {
	const routeNameComponent = document.getElementById("route-name")

	if (routeNameComponent)
		routeNameComponent.textContent = `/ ${route_name}`

}
