import type { Editor } from "grapesjs";
import { beforeEach, describe, it, expect } from "vitest"
import grapesjs from "grapesjs";
import getComponentStyles from "./getStyles";

describe("Get Component Styles based on current state (None, hover, odd...)", () => {

    let editor: Editor;

    beforeEach(() => {
        editor = grapesjs.init({
            container: document.body,
            height: '100px',
            width: '100px',
            storageManager: false,
            plugins: [],
        });

        const cssComposer = editor.CssComposer

        cssComposer.addRules(`
            .title {
                background-color: red;
            }

            .title:hover {
                padding: 20px;
            }
        `)
    })

    it("Get all styles from component", () => {
        const component = editor.addComponents({
            type: 'text',
            components: 'Hello',
            attributes: { class: 'title' },
            style: {
                margin: "20px"
            }
        })[0];

        component.setStyle({  
            color: 'red', 
            'font-size': '14px', 
        })

        const styles = getComponentStyles(component, editor);
        expect(styles).toEqual({ 
            color: 'red', 
            'font-size': '14px',
            'background-color': 'red',
            margin: "20px"
        });
    })

    it("Get all styles from component on hover", () => {
        
        const component = editor.addComponents({
            type: 'text',
            components: 'Hello',
            attributes: { class: 'title' },
            style: {
                margin: "20px"
            }
        })[0];


        const selectorManager = editor.SelectorManager
        selectorManager.setState("hover")

        component.setStyle({  
            color: 'red', 
            'font-size': '14px', 
        })

        const styles = getComponentStyles(component, editor);
        expect(styles).toEqual({ 
            color: 'red', 
            'font-size': '14px',
            'background-color': 'red',
            margin: "20px",
            padding: "20px"
        }); 
    })
    
})