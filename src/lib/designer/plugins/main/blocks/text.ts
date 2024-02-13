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

}