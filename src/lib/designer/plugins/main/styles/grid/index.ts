import loadComponents from './components'
import loadBlocks from './blocks'
import { BLOCKS } from './consts'
import type { Editor } from 'grapesjs'


type PluginOptions = {
    blocks: [string, string],
      
    rowBlock: {},
    rowProps: {},
      
    columnsProps: {},
      
    columnBlock: {},
    columnProps: {},
      
    useIds: false,

    /* Default 'dm-column-2 */
    columnName: string,

    default_css: boolean,
    default_components: boolean,
    
}

export default function loadGrid(editor: Editor) {
    const options: PluginOptions = {
        blocks: [BLOCKS.row, BLOCKS.column],

        rowBlock: {},
        rowProps: {},
        
        columnsProps: {},
        
        columnBlock: {},
        columnProps: {},
        
        useIds: false,
        columnName: 'dm-column-2',

        default_css: true,
        default_components: true,
    }

    // Add components
    loadComponents(editor, options)

    // Add blocks
    loadBlocks(editor, options)

    editor.StyleManager.addSector('grid', {
        name: 'Grid',
        open: false,
        buildProps: ['display', 'grid-template-columns', 'grid-template-rows', 'gap', 'justify-items', 'align-items', 'justify-content', 'align-content'],
        properties: [{
            id: 'display',
            name: 'Display',
            type: 'select',
            /* options: [
            { value: 'grid', name: 'Grid' },
            { value: 'inline-grid', name: 'Inline Grid' }
            ]  */
        },
        // Example: grid-template-columns property
        {
        id: 'grid-template-columns',
        name: 'Template Columns',
        type: 'text', // Use 'text' type for simplicity; consider a custom type for more control
        },
        // Add other grid properties similarly...
    ],
    }, { at: 0 }); // Insert at the beginning

}



/* 
export default function loadGridSupport(editor: Editor) {
    editor.StyleManager.addSector('grid', {
        name: 'Grid',
        open: false,
        buildProps: ['display', 'grid-template-columns', 'grid-template-rows', 'grid-gap', 'grid-column-gap', 'grid-row-gap', 'justify-items', 'align-items', 'justify-content', 'align-content'],
        properties: [{
            id: 'display',
            name: 'Display',
            type: 'select',
            options: [
              { value: 'grid', name: 'Grid' },
              { value: 'inline-grid', name: 'Inline Grid' }
            ] 
        },
        // Example: grid-template-columns property
        {
          id: 'grid-template-columns',
          name: 'Template Columns',
          type: 'text', // Use 'text' type for simplicity; consider a custom type for more control
        },
        // Add other grid properties similarly...
      ],
    }, { at: 0 }); // Insert at the beginning
    
}

*/