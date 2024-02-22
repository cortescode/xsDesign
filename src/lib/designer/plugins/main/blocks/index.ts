import type { Editor, BlockProperties } from 'grapesjs'
import type { PluginOptions } from '..'

import loadLayouts from './layouts';
import loadText from './text';
import loadMedia from './media';


export default function loadBlocks(editor: Editor, options: Required<PluginOptions>) {

    loadLayouts(editor);

    loadText(editor);

    loadMedia(editor)


}

