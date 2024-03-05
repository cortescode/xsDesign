import type { Editor, BlockProperties } from 'grapesjs'
import loadComponents from './components';
import loadBlocks from './blocks';
import loadStyleManagerGrid from './styleManagerGrid';


export default function loadGrid(editor: Editor) {
    loadComponents(editor)
    loadBlocks(editor)
    loadStyleManagerGrid(editor)
    
}
