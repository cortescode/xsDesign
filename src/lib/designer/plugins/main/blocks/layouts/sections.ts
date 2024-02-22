import type { Editor, BlockProperties } from 'grapesjs'


export default function loadSections(editor: Editor) {

    const blockManager = editor.BlockManager

    blockManager.add('empty-section', {
        label: 'Empty Section',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `
        <section class="empty-section" name="section">
        </section>
        <style>
            .empty-section {
                width: 100%;
                min-height: 140px;
            }
        </style>`,
        category: 'Layouts'
    })

    blockManager.add('text-section', {
        label: 'Text Section',
        media: `<svg viewBox="0 0 23 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>
        </svg>`,
        content: `
        <section class="text-section">
            <div name="content">
                <h2>Text Section</h2>
                <p>Write here what you want to tell your users</p>
            </div>
        </section>
        <style>
            .text-section {
                width: 100%;
                min-height: 140px;
            }
        </style>`,
        category: 'Layouts'
    })
}