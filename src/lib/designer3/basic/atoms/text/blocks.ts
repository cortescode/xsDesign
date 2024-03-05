import type { Component, Editor } from 'grapesjs'



export default function loadTextBlocks(editor: Editor, commonBlockProps: any) {
    const blockManager = editor.BlockManager;


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
            style: {
                "font-size": "4em"
            }
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
            editable: "true",
        }
        
    })


}