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
            StyleManager.addProperty('DISPLAY', {
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
            StyleManager.addProperty('DISPLAY', {
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
            StyleManager.addProperty('DISPLAY', {
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
            StyleManager.addProperty('DISPLAY', {
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
            if(!StyleManager.getSector('DISPLAY'))
                return
            
            StyleManager.removeProperty('DISPLAY', 'top-space')
            StyleManager.removeProperty('DISPLAY', 'right-space')
            StyleManager.removeProperty('DISPLAY', 'bottom-space')
            StyleManager.removeProperty('DISPLAY', 'left-space')
        }

    }
}