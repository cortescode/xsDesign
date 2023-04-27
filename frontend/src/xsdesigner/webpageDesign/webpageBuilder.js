import { Html, Div } from './elements.js';
import { Element } from './elementBase.js';

export class WebpageBuilder {
    html_content_json;
    html_string;

    style = 'default.css';

    constructor() {
        this.html_content = {}
    }

    // The element can be just a string
    addElement(element, parent) {
        if(typeof element !== "string" || typeof element !== Element)
            return;

        if(typeof parent !== "string" || typeof parent !== Element)
            return;

        if(parent.allow_childs != true)
            return;

        parent.childs.push(element)
    }

    removeElement(element, parent) {
        let new_childs = [];
        parent.childs.forEach(child => {
            if(element !== child) {
                new_childs.push(child)
            }
        });
        parent.childs = new_childs
    }

    editElement(element, index) {
        childs = element.childs
    }

    generateHtmlString(element) {
        
    }
    

}

