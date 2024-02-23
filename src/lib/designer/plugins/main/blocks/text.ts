import type { Component, Editor } from 'grapesjs'



export default function loadText(editor: Editor) {

    const blockManager = editor.BlockManager;

    const commonBlockProps = {
        category: "Basic"
    }

    function changeTag(component: Component, tagName: string) {
        component.set('tagName', tagName);
        component.view?.render();
    }

    editor.Components.addType('simple-text', {
        extend: 'text',
        model: {
            defaults: {
                name: 'text',
                tagName: "p",
                attributes: {
                    class: "simplet-text",
                },
                traits: [
                    // Existing traits here...
                    // Adding a custom trait for changing the tag name
                    "id",
                    {
                        default: "p",
                        type: 'select', // Using select to limit options, but 'text' type could be used for freeform input
                        label: 'Html Tag',
                        name: 'tagName',
                        options: [
                            { id: 'p', name: 'p' },
                            { id: 'span', name: 'span' },
                            { id: 'blockquote', name: 'blockquote' },
                        ]
                    },
                ],
                styles: `
                    .simple-text {
                        display: block;
                    }
                `
                
            },
            // Function to run when the model's init event is triggered
            init() {
                this.on('change:attributes:tagName', this.changeTagName);
            },
            // Function to change the tag name
            changeTagName(model: any, tagName: string) {
                console.log(model)
                changeTag(this, tagName)
            },
        },
    });


    editor.Components.addType('title', {
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

                console.log("init")
                this.on('change:attributes:tagName', this.changeTagName);
            },
            // Function to change the tag name
            changeTagName(model: any, tagName: string) {
                changeTag(this, tagName)
            },
        },
    });

    blockManager.add("title", {
        ...commonBlockProps,
        label: "title",
        media: `<svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
        </svg>`,
        content: {
            type: "title",
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            `,
        }
    })



    blockManager.add("paragraph", {
        ...commonBlockProps,
        label: "paragraph",
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,
        content: {
            type: "simple-text",
            content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
            `,
            editable: "true"
        }
    })


    blockManager.add('custom-link', {
        ...commonBlockProps,
        label: "link",
        media: `<svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"></path>
        </svg>`,
        category: 'Basic',
        content: { type: 'custom-link', content: 'Link' },
    });


    blockManager.add('button-link', {
        ...commonBlockProps,
        label: "button",
        media: `<svg viewBox="0 0 28 28" style="margin-top: 10px">
          <path fill="currentColor" d="m20.999,24c.02,0-.021,0,0,0h0ZM19.5,0H4.5C2.019,0,0,2.019,0,4.5v2c0,2.481,2.019,4.5,4.5,4.5h.5c.553,0,1-.448,1-1s-.447-1-1-1h-.5c-1.379,0-2.5-1.122-2.5-2.5v-2c0-1.378,1.121-2.5,2.5-2.5h15c1.379,0,2.5,1.122,2.5,2.5v2c0,1.378-1.121,2.5-2.5,2.5h-2.5c-.553,0-1,.448-1,1s.447,1,1,1h2.5c2.481,0,4.5-2.019,4.5-4.5v-2c0-2.481-2.019-4.5-4.5-4.5Zm-.737,18.552l-4.756-1.783v-4.662c0-1.516-1.076-2.834-2.504-3.066-.879-.144-1.768.103-2.439.674s-1.057,1.404-1.057,2.286v7.563l-.999-.795c-1.21-1.087-3.078-1.011-4.192.182-1.13,1.208-1.066,3.11.13,4.23l.558.538c.186.18.435.28.694.28.9,0,1.342-1.095.694-1.72l-.568-.548c-.403-.378-.424-1.013-.046-1.416.373-.399.999-.42,1.401-.055.022.021,1.781,1.423,1.781,1.423.477.38,1.113.448,1.66.186.548-.265.888-.807.888-1.415v-8.455c0-.294.129-.572.353-.762.228-.194.519-.271.822-.224.463.076.825.556.825,1.093v5.354c0,.417.259.79.648.937l5.404,2.027c1.111.416,1.873,1.45,1.942,2.633.031.532.472.942.997.942.551-.032,1.031-.507.999-1.058-.115-1.973-1.385-3.696-3.235-4.39Z"/>
          </svg>`,
        category: 'Basic',
        content: { type: 'button-link', content: 'Button Link' },
    });

}