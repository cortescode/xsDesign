import type { Component, Editor, Sector, SectorProperties } from "grapesjs";



export default function loadComponents(editor: Editor) {

    const components = editor.Components

    const gridMinHeight = 80;

    const styleGrid = {
        "display": "grid",
        "align-items": "center",
        "justify-items": "center",
        "padding": "40px",
        "gap": "10px",
    }

    const styleChild = {
        "min-height": `${gridMinHeight}px`,
        "min-width": "80px",
        "width": "100%",
        "height": "100%",
        "padding": "10px"
    }



    components.addType("grid-child", {
        model: {
            defaults: {
                name: 'Grid Child',
                tagName: 'div',
                style: styleChild,
                unstylable: ['font-size'],
                editable: true,
            },
        }
    });

    components.addType("grid1x1", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                components: [{ type: "grid-child" }],
                style: Object.assign({}, styleGrid, {
                    "grid-template-columns": "1fr",
                    "grid-template-rows": "1fr"
                }),
                editable: true,
            },
        }
    });


    components.addType("grid2x1", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                components: [{ type: "grid-child" }, { type: "grid-child" }],
                style: Object.assign({}, styleGrid, {
                    "grid-template-columns": "1fr 1fr",
                    "grid-template-rows": "1fr"
                }),
                editable: true,
            },
        }
    });

    components.addType("grid3x1", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                components: [{ type: "grid-child" }, { type: "grid-child" }, { type: "grid-child" }],
                style: Object.assign({}, styleGrid, {
                    "grid-template-columns": "1fr 1fr 1fr",
                    "grid-template-rows": "1fr"
                }),
                editable: true,
            },
        }
    });


    components.addType("grid2x2", {
        model: {
            defaults: {
                name: 'Grid',
                tagName: 'section',
                components: [{ type: "grid-child" }, { type: "grid-child" }, { type: "grid-child" }, { type: "grid-child" }],
                style: Object.assign({}, styleGrid, {
                    "grid-template-columns": "1fr 1fr",
                    "grid-template-rows": "1fr 1fr"
                }),
                editable: true,
            },
        }
    });

}