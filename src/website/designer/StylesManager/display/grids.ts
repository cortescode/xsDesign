import type { Component, Editor, PropertyProps } from "grapesjs";
import getComponentStyles from "../utils/getStyles";


// The Style Manager Sector where the grid options will be added
const smGridSectorId = "GRID"
const smGridChildSectorId = "GRID-CHILD"

export default function loadDisplayGridsManager(editor: Editor) {

    // Listen for Grid component selection
    editor.on('component:selected', (component: Component) => {

        const domElement = component.getEl();
        if (!domElement) return;

        let styles = getComponentStyles(component, editor)
        let display = styles["display"]


        if (domElement && display === 'grid') {
            addGridProperties(editor)
            addGridEditingStyles(domElement)
        }


        let parentComponent = component.parent()
        let parent = parentComponent?.getEl()
        if (!parent) return;

        // @ts-ignore
        styles = getComponentStyles(parentComponent, editor)
        display = styles["display"]


        if (parent && display === 'grid') {
            addGridChildProperties(editor, parent)
            addGridEditingStyles(parent)
        }

    });


    // Listen for Grid component deselection
    editor.on('component:deselected', (component: Component) => {
        const domElement = component.getEl();
        if (!domElement) return;


        let styles = getComponentStyles(component, editor)
        let display = styles["display"]

        if (domElement && display === 'grid') {
            removeGridProperties(editor)
            removeGridEditingStyles(domElement)
        }


        let parentComponent = component.parent()
        let parent = parentComponent?.getEl()
        if (!parent) return;

        // @ts-ignore
        styles = getComponentStyles(parentComponent, editor)
        display = styles["display"]
        if (parent && display === 'grid') {
            removeGridChildProperties(editor)
            removeGridEditingStyles(parent)
        }
    })

    // Listen for Grid component display update
    editor.on('component:styleUpdate:display', (component: Component) => {
        const domElement = component.getEl();
        if (!domElement) return;

        const styles = getComponentStyles(component, editor)
        const display = styles["display"]

        if (domElement && display === 'grid') {
            addGridProperties(editor)
            addGridEditingStyles(domElement)
        } else {
            removeGridProperties(editor)
            removeGridEditingStyles(domElement)
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

    StyleManager.addSector(smGridSectorId, {
        id: smGridSectorId,
        name: "GRID",
        open: true,
        properties: [{
            id: 'grid-columns',
            type: 'radio',
            name: 'Columns',
            default: "1fr",
            property: 'grid-template-columns',
            // @ts-ignore
            options: [
                { id: '1fr', label: '1' },
                { id: '1fr 1fr', label: '2' },
                { id: '1fr 1fr 1fr', label: '3' },
                { id: '1fr 1fr 1fr 1fr', label: '4' },
            ],
        },
        {
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
                { id: '1fr 1fr 1fr 1fr', label: '4' },
            ],
        },
        {
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
        },
        {
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
        },
        {
            id: 'grid-gap',
            name: "Space Between",
            property: "gap",
            type: "number",
            defaults: "10px",
            full: true,
            // @ts-ignore
            units: ["px", "%"],
        }
    ]
    }, {
        at: 1,
    })
    
}

function removeGridProperties(editor: Editor) {
    const { StyleManager } = editor
    if(StyleManager.getSector(smGridSectorId))
        StyleManager.removeSector(smGridSectorId)
}

function addGridChildProperties(editor: Editor, parent: HTMLElement) {

    const { StyleManager } = editor

    const parentComputedStyles = window.getComputedStyle(parent)
    let parentColumnsLength = parentComputedStyles?.getPropertyValue('grid-template-columns')?.split(" ")?.length
    let parentRowsLength = parentComputedStyles?.getPropertyValue('grid-template-rows')?.split(" ")?.length

    let properties: any = [
        {
            id: 'self-horizontal-align',
            type: "radio",
            name: "Self Horizontal Align",
            label: "Self Horizontal Align",
            property: "justify-self",
            // @ts-ignore
            options: [
                { id: "start", label: "Start" },
                { id: "center", label: "Center" },
                { id: "end", label: "End" },
            ]
        },
        {
            id: 'self-vertical-align',
            type: "radio",
            name: "Self Vertical Align",
            label: "Self Vertical Align",
            property: "align-self",
            // @ts-ignore
            options: [
                { id: "start", label: "Start" },
                { id: "center", label: "Center" },
                { id: "end", label: "End" },
            ]
        }
    ]
    if(parentColumnsLength && parentColumnsLength > 1) {

        let columnsSizeProperties = Array.from({ length: parentColumnsLength }, (_, index) => {
            return { 
                "id": `span ${index+1}`, 
                "label": `${index+1}`
            }
        });
        properties.push({
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
        let rowsSizeProperties = Array.from({ length: parentRowsLength }, (_, index) => {
            return { 
                "id": `span ${index+1}`, 
                "label": `${index+1}`
            }
        });
        properties.push({
            id: "grid-rows-size",
            type: "radio",
            property: "grid-row",
            label: "Size in rows",
            default: "span 1",
            // @ts-ignore
            options: [...rowsSizeProperties],
        })
        
    }
        
    StyleManager.addSector(smGridChildSectorId, {
        id: smGridChildSectorId,
        name: "GRID CHILD",
        open: true,
        properties: properties
    }, {
        at: 1
    })

}

function removeGridChildProperties(editor: Editor) {
    const { StyleManager } = editor
    StyleManager.removeSector(smGridChildSectorId);
}