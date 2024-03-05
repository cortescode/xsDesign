import type { Component, Editor, PropertyProps } from "grapesjs";



export default function loadGridSupport(editor: Editor) {
    const styleManager = editor.StyleManager;


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
        name: "Grid",
        open: false,
        properties: [
            {
                type: "radio",
                name: "Horizontal Align",
                property: "justify-items",
                defaults: "center",
                // @ts-ignore
                options: [
                    { id: "start", label: "Start" },
                    { id: "end", label: "End" },
                    { id: "center", label: "Center" },
                ],
            },
            {
                type: "radio",
                name: "Vertical Align",
                property: "align-items",
                defaults: "center",
                // @ts-ignore
                options: [
                    { id: "start", label: "Start" },
                    { id: "center", label: "Center" },
                    { id: "end", label: "End" },
                ],
            },
            {
                type: "radio",
                name: "Columns",
                property: "grid-template-columns",
                // @ts-ignore
                options: [
                    { id: "1fr", label: "1" },
                    { id: "1fr 1fr", label: "2" },
                    { id: "1fr 1fr 1fr", label: "3" },
                ],
            },
            {
                type: "radio",
                name: "Rows",
                property: "grid-template-rows",
                // @ts-ignore
                options: [
                    { id: "1fr", label: "1" },
                    { id: "1fr 1fr", label: "2" },
                    { id: "1fr 1fr 1fr", label: "3" },
                ],
            },

            {
                name: "Gap",
                property: "gap",
                type: "number",
                defaults: "10px",
                // @ts-ignore
                units: ["px", "%"],
            },
        ],
    }, { at: 1 });
    
    
    
}


function addGridChildSector(editor: Editor) {

    editor.StyleManager.addSector('Grid Child', {
        name: "Grid Child",
        open: false,
        properties: [
            {
                type: "radio",
                property: "grid-column",
                label: "Size in columns",
                default: "span 1",
                // @ts-ignore
                options: [
                    { id: "span 1", label: "1" },
                    { id: "span 2", label: "2" },
                    { id: "span 3", label: "3" },
                    { id: "span 4", label: "4" },
                ],
            },
            {
                type: "radio",
                property: "grid-row",
                label: "Size in rows",
                default: "span 1",
                // @ts-ignore
                options: [
                    { id: "span 1", label: "1" },
                    { id: "span 2", label: "2" },
                    { id: "span 3", label: "3" },
                    { id: "span 4", label: "4" },
                ],
            },
        ],
        visible: false
    }, { at: 1 });
    
    
}