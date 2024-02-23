import type { Editor, Page } from 'grapesjs';
import type { PluginOptions } from '.';
import JSZip from "jszip";
import saveAs from "file-saver";

import { website as website_store } from '$lib/designer/components/website';

import {
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  oas,
  opa
} from './consts';
import type { Website } from '$lib/designer/interfaces/Website';
import type { Route } from '$lib/designer/interfaces/Route';



export default function loadPanels(editor: Editor) {
  const { Panels } = editor;
  const config = editor.getConfig();
  const swv = 'sw-visibility';
  const expt = 'export-template';
  const osm = 'open-sm';
  const otm = 'open-tm';
  const ola = 'open-layers';
  const obl = 'open-blocks';
  const ful = 'fullscreen';
  const prv = 'preview';
  const iconStyle = 'style="display: block; max-width:22px;"';


  let website: Website;

  website_store.subscribe(site => website = site)

  config.showDevices = false;

  Panels.getPanels().reset([
    {
      id: 'sites-admin',
      attributes: {
        class: "panel-route"
      },
      buttons: [{
          id: opa,
          command: opa,
          label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" transform="scale(1.18)" d="M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z"></path>
          </svg>`,
          attributes: {
            class: "routes-button"
          }
        },{
          id: "route-name",
          label: `/`,
          attributes: {
            class:"route-name"
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
        </svg>`
      },
      {
        id: cmdDeviceTablet,
        command: cmdDeviceTablet,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z" />
        </svg>`
      },{
        id: cmdDeviceMobile,
        command: cmdDeviceMobile,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
        </svg>`
      }]
    },
    {
      id: 'options',
      buttons: [{
        id: swv,
        command: swv,
        context: swv,
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <path fill="currentColor" d="M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z" />
    </svg>`,
      },{
        id: prv,
        context: prv,
        command: () => editor.runCommand(prv),
        label: `<svg ${iconStyle} viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>`
      },{
        id: expt,
        command: () => editor.runCommand(expt),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>`
      },{
        id: 'undo',
        command: () => editor.runCommand('core:undo'),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z" />
        </svg>`
      },{
        id: 'redo',
        command: () => editor.runCommand('core:redo'),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z" />
        </svg>`,
      },{
        id: cmdImport,
        command: () => editor.runCommand(cmdImport),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>`,
      },
      {
        id: cmdClear,
        command: () => editor.runCommand(cmdClear),
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
          </svg>`,
      },
      {
        id: "second",
        command: async () => {
          openModal()


          function openModal() {

            // Check if the added component is of type 'custom-link'
            editor.Modal.open({
              title: "Export and download",
              content: `<button class="designer-button" id="exportBtn">
                Download website
                <svg width="24" height="24" viewBox="0 0 24 24" style="margin-left: 20px">
                    <path fill="white" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
              </button>`,
              attributes: {
                class: 'small-modal',
              }
            })

            let modal = editor.Modal.getContentEl()
              
            const saveLinkBtn = modal?.querySelector('#exportBtn');
              
            saveLinkBtn?.addEventListener('click', async () => {
              await exportAndZip()
              editor.Modal.close();
            });


          }

          async function exportAndZip() {

            let routes = website.routes;
            const zip = new JSZip();

    
            // Iterate through pages and export each one
            const pagesManager = editor;

            let route: Route;
            for (route of routes) {

                let page = editor.Pages.get(route.page_id)
                if(!page) continue

                editor.Pages.select(page);

                let cssRoute = `css/${page.id}.css`
                let header = geHtmlHeader(route, cssRoute)

                const exportedHtml = `
                  <!DOCTYPE html>
                  <html lang="en">

                    ${ header } 

                    ${ editor.getHtml() }

                  </html>
                `
    
                const exportedCss = editor.getCss() || "";
    
                zip.file(`${page.id}.html`, exportedHtml);
                zip.file(cssRoute, exportedCss);
            }
    
            // Generate the zip file
            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, 'website.zip'); // This assumes you have the FileSaver.js library or a similar method for saving the Blob
          }


          function geHtmlHeader(route: Route, cssRoute: string) {
            return `
    <head>

        <meta charset="utf-8" />

        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width" />

        <title>${ route.title }</title>
        <meta name="description" content="${ route.description }" />

        <!-- Styles and Fonts-->
        <link rel="stylesheet" href="${cssRoute}" />
        <!-- Google fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Righteous">
            
    </head>
`
          }
          
        },
        label: `<svg ${iconStyle} viewBox="0 0 24 24">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16,15H9V13H16M19,11H9V9H19M19,7H9V5H19M21,1H7C5.89,1 5,1.89 5,3V17C5,18.11 5.9,19 7,19H21C22.11,19 23,18.11 23,17V3C23,1.89 22.1,1 21,1M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3Z" style="fill: currentcolor;"></path>
        </svg>`,
      },
      {
        id: oas,
        command: () => editor.runCommand(oas),
        label: `<svg style="display: block; width:28px; height: 22px" viewBox="0 0 24 24">
            <path transform="scale(1.2)" d="M18.555,15.354V4.592c0-0.248-0.202-0.451-0.45-0.451H1.888c-0.248,0-0.451,0.203-0.451,0.451v10.808c0,0.559,0.751,0.451,0.451,0.451h16.217h0.005C18.793,15.851,18.478,14.814,18.555,15.354 M2.8,14.949l4.944-6.464l4.144,5.419c0.003,0.003,0.003,0.003,0.003,0.005l0.797,1.04H2.8z M13.822,14.949l-1.006-1.317l1.689-2.218l2.688,3.535H13.822z M17.654,14.064l-2.791-3.666c-0.181-0.237-0.535-0.237-0.716,0l-1.899,2.493l-4.146-5.42c-0.18-0.237-0.536-0.237-0.716,0l-5.047,6.598V5.042h15.316V14.064z M12.474,6.393c-0.869,0-1.577,0.707-1.577,1.576s0.708,1.576,1.577,1.576s1.577-0.707,1.577-1.576S13.343,6.393,12.474,6.393 M12.474,8.645c-0.371,0-0.676-0.304-0.676-0.676s0.305-0.676,0.676-0.676c0.372,0,0.676,0.304,0.676,0.676S12.846,8.645,12.474,8.645"></path>
          </svg>`,
      }],
  },{
    id: 'views',
    buttons  : [{
      id: osm,
      command: osm,
      active: true,
      label: `<svg ${iconStyle} viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
        </svg>`,
    }, {
      id: otm,
      command: otm,
      label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
      </svg>`
    },{
      id: ola,
      command: ola,
      label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z" />
      </svg>`
    },{
      id: obl,
      command: obl,
      label: `<svg ${iconStyle} viewBox="0 0 24 24">
          <path fill="currentColor" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
      </svg>`
    }],
  }]);

  const openBl = Panels.getButton('views', obl);
  editor.on('load', () => {
    openBl?.set('active', true)
  
    let currentPage = editor.Pages.getSelected()

    
    let currentWebsite = website.routes.find(
      (route) =>  route.page_id == currentPage?.id
    )

    if(currentWebsite)
      setRouteNameOnPanel(currentWebsite.title)
  
  });

  editor.on('page:change', (message) => {
      setRouteNameOnPanel(message.route.title)
  })


  function setRouteNameOnPanel(route_name: string) {
      let panel = editor?.Panels?.getPanel("sites-admin")
      if(!panel) return

      let route = panel?.buttons?.get("route-name")
      if(!route) return
      
      route.set('label', `/ ${ route_name }`)
  }


    // On component change show the Style Manager
    editor.on('component:selected', () => {
    const openSmBtn = Panels.getButton('views', osm);
    const openLayersBtn = Panels.getButton('views', ola);

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn?.set('active', true);
    }
  });
}

