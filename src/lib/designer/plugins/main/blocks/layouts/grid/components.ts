import type { Editor } from "grapesjs";



export default function loadComponents(editor: Editor) {

    const components = editor.Components

    const stylePrefix = "layout"

    const classGrid = `${stylePrefix}-grid`;
    const classChild = `${stylePrefix}-child`;

    const gridMinHeight = 80;

    const styleGrid = `
        display: grid;
        align-items: center;
        justify-items: center;
        padding: 40px;
        gap: 10px;
    `

    const styleChild = `
        .${classChild} {
            min-height: ${gridMinHeight}px;
            min-width: 80px;
            width: 100%;
            min-height: 80px;
            height: 100%;
            padding: 10px
        }`



        components.addType("grid-child", {
        model: {
            defaults: {
                name: 'Grid Child',
                tagName: 'div',
                attributes: {
                    class: `${classChild} `,
                },
                styles: `${styleChild}`
            },
        }
    });

    components.addType("grid1x1", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                attributes: {
                    class: `grid1x1`,
                },
                components: [{ type: "grid-child" }],
                styles: `
                    .grid1x1 {
                        ${styleGrid}
                        grid-template-columns: 1fr;
                        grid-template-rows: 1fr;
                    }
                `
            },
        }
    });


    components.addType("grid2x1", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                attributes: {
                    class: `grid2x1`,
                },
                components: [{ type: "grid-child" }, { type: "grid-child" }],
                styles: `
                    .grid2x1 {
                        ${styleGrid}
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr;
                    }
                    `
            },
        }
    });

    components.addType("grid3x1", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                attributes: { class: `${classGrid} grid3x1` },
                components: [{ type: "grid-child" }, { type: "grid-child" }, { type: "grid-child" }],
                styles: `
                    .grid3x1 {
                        ${styleGrid}
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-template-rows: 1fr;
                    }
            `
            },
        }
    });


    components.addType("grid2x2", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                attributes: { class: `${classGrid} grid2x2` },
                components: [{ type: "grid-child" }, { type: "grid-child" }, { type: "grid-child" }, { type: "grid-child" }],
                styles: `
                    .grid2x2 {
                        ${styleGrid}
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: 1fr 1fr;
                    }
            `
            },
        }
    });

}