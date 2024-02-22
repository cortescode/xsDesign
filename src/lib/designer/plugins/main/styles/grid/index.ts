import type { Component, Editor, PropertyProps } from "grapesjs";



export default function loadGridSupport(editor: Editor) {
    const styleManager = editor.StyleManager;

    let propertyProps: PropertyProps | any = styleManager.getBuiltIn("display")


    // Adding grid to display options
    if (propertyProps && Array.isArray(propertyProps.options)) {
        propertyProps.options.push({ value: "grid", name: "grid" });
    } else {
        console.error("Cannot modify options of undefined or non-array propertyProps.options");
    }


    // Listen for Grid component selection
    editor.on('component:selected', (component: Component) => {
        
        const domElement = component.getEl();
        if(!domElement) return;

        if (domElement && window.getComputedStyle(domElement).display === 'grid') {
            addGridSector(editor)
            addGridEditingStyles(domElement)
        }

        
        let parentComponent = component.parent()
        let parent = parentComponent?.getEl()
        if(!parent) return;

        if (parent && window.getComputedStyle(parent).display === 'grid') {
            addGridChildSector(editor)
            addGridEditingStyles(parent)
        } 

    });


    // Listen for Grid component deselection
    editor.on('component:deselected', (component: Component) => {
        const domElement = component.getEl();
        if(!domElement) return;

        if (domElement && window.getComputedStyle(domElement).display === 'grid') {
            const removed = styleManager.removeSector("Grid")
            removeGridEditingStyles(domElement)
        }


        let parentComponent = component.parent()
        let parent = parentComponent?.getEl()
        if(!parent) return;

        if (parent && window.getComputedStyle(parent).display === 'grid') {
            styleManager.removeSector("Grid Child")
            removeGridEditingStyles(parent)
        }
    })

    // Listen for Grid component display update
    editor.on('component:styleUpdate:display', (component: Component) => {
        const domElement = component.getEl();
        if(!domElement) return;

        if (domElement && window.getComputedStyle(domElement).display === 'grid') {
            addGridSector(editor)
            addGridEditingStyles(domElement)
        } else {
            if(styleManager.getSector("Grid")) {
                styleManager.removeSector("Grid")
                removeGridEditingStyles(domElement)
            }
        }

    })

}



// Styles added to the grid during  editing, currently it adds a dashed border to grid children
function addGridEditingStyles(element: HTMLElement): void {
    
    let children = element.children
    for(let node of children) {
        node.setAttribute("style", "outline: 2px dashed white;");
    }
}

function removeGridEditingStyles(element: HTMLElement): void {

    let children = element.children
    for(let node of children) {
        node.setAttribute("style", "");
    }
}


function addGridSector(editor: Editor) {
    editor.StyleManager.addSector('Grid', {
        name: 'Grid',
        open: false,
        properties: [
            {
                name: 'Align',
                property: 'place-items',
                type: 'select',
                defaults: 'center',
                // @ts-ignore 
                options: [
                    { value: 'flex-start', name: 'Start' },
                    { value: 'flex-end', name: 'End' },
                    { value: 'center', name: 'Center' },
                    { value: 'space-between', name: 'Space Between' },
                    { value: 'space-around', name: 'Space Around' },
                    { value: 'space-evenly', name: 'Space Evenly' },
                ],
            },
            {
                name: 'Horizontal Align',
                property: 'justify-content',
                type: 'select',
                defaults: 'center',
                // @ts-ignore 
                options: [
                    { value: 'flex-start', name: 'Start' },
                    { value: 'flex-end', name: 'End' },
                    { value: 'center', name: 'Center' },
                    { value: 'space-between', name: 'Space Between' },
                    { value: 'space-around', name: 'Space Around' },
                    { value: 'space-evenly', name: 'Space Evenly' },
                ],
            },
            {
                name: 'Vertical Align',
                property: 'align-items',
                type: 'select',
                defaults: 'center',
                // @ts-ignore 
                options: [
                    { value: 'flex-start', name: 'Start' },
                    { value: 'flex-end', name: 'End' },
                    { value: 'center', name: 'Center' },
                    { value: 'space-between', name: 'Space Between' },
                    { value: 'space-around', name: 'Space Around' },
                    { value: 'space-evenly', name: 'Space Evenly' },
                ],
            },
            {
                name: 'Rows',
                property: 'grid-template-rows',
                type: 'text',
            },
            {
                name: 'Columns',
                property: 'grid-template-columns',
                type: 'text',
            },
            {
                name: 'Gap',
                property: 'gap',
                type: 'number',
                defaults: '10px',
                // @ts-ignore 
                units: [
                    "px",
                    "%"
                ]
            },
        ],
    }, { at: 1 });
    
    
}


function addGridChildSector(editor: Editor) {

    editor.StyleManager.addSector('Grid Child', {
        name: 'Grid Child',
        open: false,
        properties: [
            {
                name: 'Column Start',
                property: 'grid-column-start',
                type: 'number',
                defaults: '1',
            },
            {
                name: 'Column End',
                property: 'grid-column-end',
                type: 'number',
                defaults: '2',
            },
            {
                name: 'Row Start',
                property: 'grid-row-start',
                type: 'number',
                defaults: '1',
            },
            {
                name: 'Row End',
                property: 'grid-row-end',
                type: 'number',
                defaults: '2',
            },
        ],
    }, { at: 1 });
    
    
}