

let elements_created = 0;

let active_ids = [];


export default class Element {
    constructor() {
        elements_created++;
        this.element_id = elements_created;
        active_ids.push(this.element_id)
        this.element = [];
        this.element_id;
        this.allow_childs = true;
        this.childs = [] // Elements string content will be added just as a string
        this.css_classes;

        // List of lists of 2 strings, one for property name and other for property value
        this.properties = [
            ['class', '']
        ]; // For example labels and inputs could contains: [['type', 'text'], ['for', 'name']]

    }

    convertToString() {
        //Generateing element properties string
        var properties_string = '';
        this.properties.forEach(property => {
            properties_string += `${property[0]}="${property[1]}"`
        })
        
        // Adding element open tag and properties to it
        let element_string = this.element[0]
        element_string = element_string.replace('>', ` ${properties_string} >`)
        
        // Add all the content that the element has
        this.childs.forEach(element => {
            if(typeof element === 'string')
                element_string +=  element
            else element_string +=  element.convertToString()
        })

        // Close and return the element
        element_string += this.element[1]
        return element_string
    }

    addChild(child, position) {
        this.childs.push(child, position);
    }

    modifyId(child, id) {
        if(active_ids.includes(id)) {
            console.log('Already exists an element with that id')
            return 
        }
        child.id = id
    }
}
