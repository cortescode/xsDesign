import type { Editor, BlockProperties } from 'grapesjs'
import loadComponents from './components';
import loadBlocks from './blocks';


export default function loadGrid(editor: Editor) {
    loadComponents(editor)
    loadBlocks(editor)
    
}
