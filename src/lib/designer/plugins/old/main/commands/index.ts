import type { Editor } from 'grapesjs';
import type { RequiredPluginOptions } from '..';
import {
  cmdClear,
  cmdDeviceDesktop,
  cmdDeviceMobile,
  cmdDeviceTablet,
  oas,
  opa
} from './../consts';
import openImport from './openImport';

export default function commands (editor: Editor, config: RequiredPluginOptions) {
  const { Commands } = editor;
  const txtConfirm = config.textCleanCanvas;

  openImport(editor, config);

  Commands.add(cmdDeviceDesktop, {
    run: ed => ed.setDevice('Desktop'),
    stop: () => {},
  });
  Commands.add(cmdDeviceTablet, {
    run: ed => ed.setDevice('Tablet'),
    stop: () => {},
  });
  Commands.add(cmdDeviceMobile, {
    run: ed => ed.setDevice('Mobile portrait'),
    stop: () => {},
  });
  Commands.add(oas, {
    run: editor => {
      let am = editor.AssetManager
      am.open()
    },
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

  Commands.add(cmdClear, (e: Editor) => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
}