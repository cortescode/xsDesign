import type { Component, Editor, PropertyProps } from "grapesjs";



export default function loadDisplayGridsManager(editor: Editor) {
    const styleManager = editor.StyleManager;


    // Listen for Grid component selection
    editor.on('component:selected', (component: Component) => {

        const domElement = component.getEl();
        if (!domElement) return;

        if (domElement && window.getComputedStyle(domElement).display === 'grid') {
            addGridProperties(editor)
            addGridEditingStyles(domElement)
        }


        let parentComponent = component.parent()
        let parent = parentComponent?.getEl()
        if (!parent) return;

        if (parent && window.getComputedStyle(parent).display === 'grid') {
            addGridChildProperties(editor, parent)
            addGridEditingStyles(parent)
        }

    });


    // Listen for Grid component deselection
    editor.on('component:deselected', (component: Component) => {
        const domElement = component.getEl();
        if (!domElement) return;

        if (domElement && window.getComputedStyle(domElement).display === 'grid') {
            removeGridProperties(editor)
            removeGridEditingStyles(domElement)
        }


        let parentComponent = component.parent()
        let parent = parentComponent?.getEl()
        if (!parent) return;

        if (parent && window.getComputedStyle(parent).display === 'grid') {
            removeGridChildProperties(editor)
            removeGridEditingStyles(parent)
        }
    })

    // Listen for Grid component display update
    editor.on('component:styleUpdate:display', (component: Component) => {
        const domElement = component.getEl();
        if (!domElement) return;

        if (domElement && window.getComputedStyle(domElement).display === 'grid') {
            addGridProperties(editor)
            addGridEditingStyles(domElement)
        } else {
            if (styleManager.getSector("Grid")) {
                removeGridProperties(editor)
                removeGridEditingStyles(domElement)
            }
        }

    })

}



// Styles added to the grid during  editing, currently it adds a dashed border to grid children
function addGridEditingStyles(element: HTMLElement): void {

    let children = element.children
    for (let node of children) {
        node.setAttribute("style", "outline: 2px dashed white;");
    }
}

function removeGridEditingStyles(element: HTMLElement): void {

    let children = element.children
    for (let node of children) {
        node.setAttribute("style", "");
    }
}


function addGridProperties(editor: Editor) {
    const { StyleManager } = editor
    StyleManager.addProperty('Display', {
        id: 'grid-columns',
        type: 'radio',
        name: 'Columns',
        default: "1fr",
        property: 'grid-template-columns',
        options: [
            { id: '1fr', label: '1' },
            { id: '1fr 1fr', label: '2' },
            { id: '1fr 1fr 1fr', label: '3' },
        ],
    },)

    StyleManager.addProperty('Display', {
        id: 'grid-rows',
        type: "radio",
        name: "Rows",
        property: "grid-template-rows",
        default: "1fr",
        // @ts-ignore
        options: [
            { id: "1fr", label: "1" },
            { id: "1fr 1fr", label: "2" },
            { id: "1fr 1fr 1fr", label: "3" },
        ],
    })
    StyleManager.addProperty('Display', {
        id: 'horizontal-align',
        type: "radio",
        name: "Components Horizontal Align",
        property: "justify-items",
        defaults: "center",
        // @ts-ignore
        options: [
            { id: "start", label: "Start" },
            { id: "center", label: "Center" },
            { id: "end", label: "End" },
        ],
    })

    StyleManager.addProperty('Display', {
        id: 'vertical-align',
        type: "radio",
        name: "Components Vertical Align",
        property: "align-items",
        defaults: "center",
        // @ts-ignore
        options: [
            { id: "start", label: "Start" },
            { id: "center", label: "Center" },
            { id: "end", label: "End" },
        ],
    })


    StyleManager.addProperty('Display',
        {
            id: 'grid-gap',
            name: "Space Between",
            property: "gap",
            type: "number",
            defaults: "10px",
            // @ts-ignore
            units: ["px", "%"],
        })

}

function removeGridProperties(editor: Editor) {
    const { StyleManager } = editor
    StyleManager.removeProperty('Display', 'grid-columns')
    StyleManager.removeProperty('Display', 'grid-rows')
    StyleManager.removeProperty('Display', 'horizontal-align')
    StyleManager.removeProperty('Display', 'vertical-align')
    StyleManager.removeProperty('Display', 'gap')
}

function addGridChildProperties(editor: Editor, parent: HTMLElement) {

    const { StyleManager } = editor

    const parentComputedStyles = window.getComputedStyle(parent)
    let parentColumnsLength = parentComputedStyles?.getPropertyValue('grid-template-columns')?.split(" ")?.length
    let parentRowsLength = parentComputedStyles?.getPropertyValue('grid-template-rows')?.split(" ")?.length

    
    if(parentColumnsLength && parentColumnsLength > 1) {

        const columnsSizeProperties = Array.from({ length: parentColumnsLength }, (_, index) => {
            return { 
                "id": `span ${index+1}`, 
                "label": `${index+1}`
            }
        });

        StyleManager.addProperty('Display', {
            id: "grid-columns-size",
            type: "radio",
            property: "grid-column",
            label: "Size in columns",
            default: "span 1",
            // @ts-ignore
            options: [...columnsSizeProperties],
        })
    }
        

    if(parentRowsLength && parentRowsLength > 1) {
        const rowsSizeProperties = Array.from({ length: parentRowsLength }, (_, index) => {
            return { 
                "id": `span ${index+1}`, 
                "label": `${index+1}`
            }
        });
        StyleManager.addProperty('Display', {
            id: "grid-rows-size",
            type: "radio",
            property: "grid-row",
            label: "Size in rows",
            default: "span 1",
            // @ts-ignore
            options: [...rowsSizeProperties],
        })
    }
        
        

    

    StyleManager.addProperty('Display', {
        id: 'self-horizontal-align',
        type: "radio",
        name: "Self Horizontal Align",
        property: "justify-self",
        // @ts-ignore
        options: [
            { id: "start", label: "Start" },
            { id: "center", label: "Center" },
            { id: "end", label: "End" },
        ]
    })

    StyleManager.addProperty('Display', {
        id: 'self-vertical-align',
        type: "radio",
        name: "Self Vertical Align",
        property: "align-self",
        // @ts-ignore
        options: [
            { id: "start", label: "Start" },
            { id: "center", label: "Center" },
            { id: "end", label: "End" },
        ]
    })

}

function removeGridChildProperties(editor: Editor) {
    const { StyleManager } = editor
    StyleManager.removeProperty('Display', 'grid-columns-size')
    StyleManager.removeProperty('Display', 'grid-rows-size')
    StyleManager.removeProperty('Display', 'self-horizontal-align')
    StyleManager.removeProperty('Display', 'self-vertical-align')
}