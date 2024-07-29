import type { Component, Editor } from "grapesjs";
import sectors from "../sectors";


const textSectorId = "TEXT"


export function loadTextSectorManager(editor: Editor) {

    const textTags = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "QUOTE", "A", "BUTTON", "INPUT", "TEXTAREA"]

    editor.on("component:selected", (component: Component) => {
        const domElement = component.getEl();
        if (!domElement) return;
        if(textTags.includes(domElement.tagName)) {
            addTextPropertiesToSector(editor)
        }
    })
    editor.on("component:deselected", (component: Component) => {
        const domElement = component.getEl();
        if (!domElement) return;
        if(textTags.includes(domElement.tagName)) {
            removeTextPropertiesToSector(editor)
        }
    })

}



function addTextPropertiesToSector(editor: Editor) {
    const { StyleManager } = editor;
    
    const textSector = StyleManager.getSector(textSectorId)
    if(textSector) {
        textSector.addProperty({
            id: "fontFamily",
            type: "family",
            label: "family",
            property: "font-family",
            full: true,
        }, {at: 0})
        
        textSector.addProperty({
            id: "fontSize",
            type: "number",
            label: "Font Size",
            property: "font-size",
            //@ts-ignore
            units: ['px', '%', 'em', 'rem'],
        }, {at: 1})

        textSector.addProperty({
            id: "lineHeight",
            type: "number",
            label: "Line Height",
            property: "line-height",
            //@ts-ignore
            units: ['px', '%', 'em', 'rem'],
        }, {at: 2})

        textSector.addProperty({
            id: "textShadow",
            type: "stack",
            property: "text-shadow",
            label: "Text Shadow",
            //@ts-ignore
            properties: [
                { type: 'number', units: ['px'], default: '0', property: 'x' },
                { type: 'number', units: ['px'], default: '0', property: 'y' },
                { type: 'number', units: ['px'], default: '0', property: 'blur' },
                { type: 'color', default: 'black', property: 'color' },
            ],
        }, {})
    } 
}

function removeTextPropertiesToSector(editor: Editor) {
    const { StyleManager } = editor;

    const textSector = StyleManager.getSector(textSectorId)

    if(textSector) {
        StyleManager.removeProperty(textSectorId, "font-family")
        StyleManager.removeProperty(textSectorId, "font-size")
        StyleManager.removeProperty(textSectorId, "line-height")
        StyleManager.removeProperty(textSectorId, "text-shadow")
    }
}