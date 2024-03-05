import type { Component, Editor } from 'grapesjs'



export default function loadTextComponents(editor: Editor) {

    const components = editor.Components

    function changeTag(component: Component, tagName: string) {
        component.set('tagName', tagName);
        component.view?.render();
    }

    function updateTitleTag(component: Component, currentTagH: number = 1) {
        // Check if there's any h1 tag before this component
        console.log("Title  wrapper: ", editor?.Components?.getWrapper())
        const allTitles = editor?.Components?.getWrapper()?.find(`[tagName=H${ String(Number) }]`);
        let shouldChange = false;

        allTitles?.forEach(title => {
            if (title && title.view && component.view && title.view.el.getBoundingClientRect().top < component.view.el.getBoundingClientRect().top) {
                shouldChange = true;
            }
            console.log("Something happens")
        });

        // If there is an h1 tag before this component, change this component's tag to h2
        if (shouldChange) {
            updateTitleTag(component, currentTagH+1)
        } else {
            changeTag(component, `H${ String(Number) }`);
        }
    }

    components.addType('simple-text', {
        extend: 'text',
        model: {
            defaults: {
                name: 'text',
                tagName: "p",
                attributes: {
                },
                traits: [
                    "id",
                    {
                        default: "p",
                        type: 'select', 
                        label: 'Html Tag',
                        name: 'tagName',
                        options: [
                            { id: 'p', name: 'p' },
                            { id: 'span', name: 'span' },
                            { id: 'blockquote', name: 'blockquote' },
                        ]
                    },
                ],
                
            },
            // Function to run when the model's init event is triggered
            init() {
                this.on('change:attributes:tagName', this.changeTagName);
            },
            // Function to change the tag name
            changeTagName(model: any, tagName: string) {
                changeTag(this, tagName)
            },
        },
    });


    components.addType('title', {
        extend: 'text',
        model: {
            defaults: {
                // Default traits for the component
                name: 'title',
                tagName: 'h1',
                traits: [
                    "id",
                    {
                        type: 'select', // Use a select box for tag name options
                        label: 'Html Tag',
                        name: 'tagName', // This will change the tag name of the component
                        default: 'h1',
                        options: [
                            { id: 'h1', name: 'H1' },
                            { id: 'h2', name: 'H2' },
                            { id: 'h3', name: 'H3' },
                            { id: 'h4', name: 'H4' },
                            { id: 'h5', name: 'H5' },
                            { id: 'h6', name: 'H6' },
                        ],
                    },
                ],
            },

            // Function to run when the model's init event is triggered
            init() {
                this.on('change:attributes:tagName', this.changeTagName);
                this.on('added', () => updateTitleTag(this,));
            },
            // Function to change the tag name
            changeTagName(model: any, tagName: string) {
                changeTag(this, tagName)
            },
        },
    });
}