import type { Editor, Component } from "grapesjs";


export default function getComponentStyles(component: Component, editor: Editor): Record<string, string | string[]> {
    // solution dictionary
    let styles: Record<string, string> = {};

    const {CssComposer, SelectorManager} = editor;

    const classes = component.getClasses();
    let state = SelectorManager.getState()
    let inlineStyles = component.getStyle();


    // Assign styles from Grapesjs
    Object.assign(styles, inlineStyles);


    // Get styles associated to the component id
    const domEl: HTMLElement | undefined = component.getEl()
    if(domEl?.id){
        let rule = CssComposer.getRule(`#${domEl?.id}`)
        if(rule) Object.assign(styles, rule.getStyle());

        // Obtaining state related styles if any
        if(state && state.length > 0){
            rule = CssComposer.getRule(`#${domEl?.id}:${state}`)
            if(rule)
                Object.assign(styles, rule.getStyle());
        }
    }
    

    // Get styles associated to the component classes
    classes.forEach((_class: string) => {
        // Get basic classs tyles

        let rule = CssComposer.getRule(`.${_class}`)
        if(rule) Object.assign(styles, rule.getStyle());

        // Obtaining state related styles if any
        if(state && state.length > 0){
            rule = CssComposer.getRule(`.${_class}:${state}`)
            if(rule)
                Object.assign(styles, rule.getStyle());
        }
    });
    

    return styles;
}

