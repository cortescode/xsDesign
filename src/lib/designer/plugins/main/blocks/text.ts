import type { Editor } from 'grapesjs'



export default function loadText(editor: Editor) {

    const blockManager = editor.BlockManager;

    const commonBlockProps = {
        category: "Basic"
    }

    blockManager.add("title", {
        ...commonBlockProps,
        label: "title (H1)",
        media: `<svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
        </svg>`,
        content: `
        <h1 class="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        </h1>
        `
    })

    blockManager.add("title-small", {
        ...commonBlockProps,
        label: "title small (H2)",
        media: `<svg viewBox="0 0 32 32">
            <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
        </svg>`,
        content: `
        <h2 class="title-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        </h2>
        `
    })

    blockManager.add("subtitle", {
        ...commonBlockProps,
        label: "subtitle (H3)",
        media: `<svg viewBox="0 0 32 32">
        <path fill="currentColor" d="M14.5,14.5l-0,14.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5l-0,-24.5l3,-0l-0,24.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5l-0,-24.5l2.5,-0c0.828,-0 1.5,-0.672 1.5,-1.5c-0,-0.828 -0.672,-1.5 -1.5,-1.5l-15.5,-0c-3.266,-0 -6,2.871 -6,6.5c-0,3.629 2.734,6.5 6,6.5l4,-0Z"/>
        </svg>`,
        content: `
        <h3 class="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        </h3>
        `
    })

    blockManager.add("subtitle-small", {
        ...commonBlockProps,
        label: "subtitle small (H4)",
        media: `<svg viewBox="0 0 44 44">
        <path fill="currentColor" d="M14.5,14.5l-0,14.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5l-0,-24.5l3,-0l-0,24.5c0,0.828 0.672,1.5 1.5,1.5c0.828,-0 1.5,-0.672 1.5,-1.5l-0,-24.5l2.5,-0c0.828,-0 1.5,-0.672 1.5,-1.5c-0,-0.828 -0.672,-1.5 -1.5,-1.5l-15.5,-0c-3.266,-0 -6,2.871 -6,6.5c-0,3.629 2.734,6.5 6,6.5l4,-0Z"/>
        </svg>`,
        content: `
        <h4 class="subtitle-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        </h4>
        `
    })

    blockManager.add("paragraph", {
        ...commonBlockProps,
        label: "paragraph",
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </svg>`,
        content: `
        <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
        </p>
        `
    })

    blockManager.add('quote', {
        ...commonBlockProps,
        label: 'Quote',
        media: `<svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
        </svg>`,
        content: `<blockquote class="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
          </blockquote>`
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