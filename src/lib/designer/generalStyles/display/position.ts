import type { Component, Editor } from "grapesjs";


export default function loadDisplayPositionManager(editor: Editor) {
    const { StyleManager } = editor;

    editor.on('component:selected', (component: Component) => {
        managePosition(component)
    })

    editor.on('component:deselected', (component: Component) => {
        managePosition(component)
    })

    editor.on('component:styleUpdate:position', (component: Component) => {
        managePosition(component)
    })

    function managePosition(component: Component) {

        if (!component) return;
        
        const el = component?.getView()?.el

        if(!el) return;
        
        const style = window.getComputedStyle(el);

        let position = style["position"]
        

        if(position && position === "fixed") {
            StyleManager.addProperty('Display', {
                id: 'top-space',
                name: "Top",
                property: "top",
                type: "number",
                defaults: "0",
                // @ts-ignore
                units: ["px", "%", "vw", "vh"],
            }, {
                at: 1
            })
            StyleManager.addProperty('Display', {
                id: 'right-space',
                name: "Right",
                property: "right",
                type: "number",
                defaults: "0",
                // @ts-ignore
                units: ["px", "%", "vw", "vh"],
            }, {
                at: 2
            })
            StyleManager.addProperty('Display', {
                id: 'bottom-space',
                name: "Bottom",
                property: "bottom",
                type: "number",
                defaults: "0",
                // @ts-ignore
                units: ["px", "%", "vw", "vh"],
            }, {
                at: 3
            })
            StyleManager.addProperty('Display', {
                id: 'left-space',
                name: "Left",
                property: "left",
                type: "number",
                defaults: "0",
                // @ts-ignore
                units: ["px", "%", "vw", "vh"],
            }, {
                at: 4
            })
        } else {
            StyleManager.removeProperty('Display', 'top-space')
            StyleManager.removeProperty('Display', 'right-space')
            StyleManager.removeProperty('Display', 'bottom-space')
            StyleManager.removeProperty('Display', 'left-space')
        }

    }
}