import type { Editor, BlockProperties } from 'grapesjs'


export default function loadSections(editor: Editor) {

    const blockManager = editor.BlockManager

    const commonBlockProps = {
        category: 'Display'
    }

    const components = editor.Components

    components.addType("section", {
        model: {
            defaults: {
                name: 'Section',
                tagName: 'section',
                style: {
                    "display": "grid",
                    "box-sizing": "border-box",
                    "width": "100%",
                    "min-height": "140px"
                },
            },
        }
    });

    components.addType("block", {
        model: {
            defaults: {
                name: 'Block',
                tagName: 'div',
                attributes: {
                    class: `default-block`,
                },
                style: `
                    .default-block {
                        display: block;
                        box-sizing: border-box;
                        width: 200px;
                        height: 200px;
                    }
                `
            },
        }
    });

    blockManager.add('empty-section', {
        label: 'Empty Section',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: {
            type: "section",
        },
        ...commonBlockProps
    })

    blockManager.add('empty-block', {
        label: 'Empty Block',
        media: `<svg viewBox="0 0 23 24">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>`,
        content: {
            type: "block",
        },
        ...commonBlockProps
    })
}