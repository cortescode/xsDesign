import type { Editor, Component } from "grapesjs";


export default function getComponentStyles(component: Component, editor: Editor): Record<string, string | string[]> {
    const classes = component.getClasses();
    const cssComposer = editor.CssComposer;
    let styles: Record<string, string> = {};

    // Get inline styles from Grapesjs
    let inlineStyles = component.getStyle();


    Object.assign(styles, inlineStyles);
    
    const selectorManager = editor.SelectorManager

    let state = selectorManager.getState()

    classes.forEach((_class: string) => {
        // Get basic classs tyles

        let rule = cssComposer.getRule(`.${_class}`)
        if(rule) Object.assign(styles, rule.getStyle());

        // Obtaining state related styles if any
        if(state && state.length > 0){
            rule = cssComposer.getRule(`.${_class}:${state}`)
            if(rule)
                Object.assign(styles, rule.getStyle());
        }
    });

    return styles;
}