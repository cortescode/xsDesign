import type { Editor, BlockProperties } from 'grapesjs'
import type { PluginOptions } from '..'

import loadColumns from './columns'
import loadText from './text';
import loadMedia from './media';


export default function loadBlocks(editor: Editor, options: Required<PluginOptions>) {

    // Loading blocks
    loadColumns(editor);

    loadText(editor);

    loadMedia(editor)


}

