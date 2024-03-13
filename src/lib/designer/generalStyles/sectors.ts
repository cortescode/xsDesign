

const sectors = [
    {
        id: "Display",
        name: "Display",
        open: false,
        properties: [{
            type: "radio",
            property: "position",
            label: "Position",
            default: "static",
            options: [
                { id: "static", label: "normal" },
                { id: "fixed", label: "floating" }
            ],
        }, {
            type: "radio",
            property: "display",
            label: "Display",
            default: "block",
            options: [
                { id: "block", label: "block" },
                { id: "inline-block", label: "inline" },
                { id: "grid", label: "grid" }
            ],
        }],
    },
    {
        name: "Dimension",
        open: false,
        buildProps: ["width", "height", "max-width", "max-height", "min-width", "min-height"],
        properties: [
            
            {
                type: 'margin-and-padding',
                label: "Margin and Padding",
                properties: ["margin", "padding"],
                full: true,
                units: ['px', '%'],
            }
        ],
    },
    {
        name: "Typography",
        open: false,
        properties: [
            /* {
                type: "radio",
                property: "font-size",
                label: "Font Size",
                default: "block",
                // @ts-ignore
                options: [
                    { id: "14px", label: "small" },
                    { id: "18px", label: "normal" },
                    { id: "2em", label: "subtitle" },
                    { id: "4em", label: "title" },
                ],
            }, */
            {
                type: "select",
                property: "font-family",
                label: "Font family",
                default: "Arial Black",
                // @ts-ignore
                options: [
                    { id: "Arial Black, Gadget, sans-serif", label: "Arial Black" },
                    { id: "Comfortaa", label: "Comfortaa" },
                    { id: "Righteous", label: "Alfa Slab One" },
                    { id: "Bevan", label: "Bevan" },
                ],
            },
            {
                type: "radio",
                property: "text-align",
                label: "Text Align",
                // @ts-ignore
                options: [
                    { id: "left", label: "left" },
                    { id: "center", label: "center" },
                    { id: "right", label: "right" },
                ],
            }
        ],
        buildProps: ["font-size", "font-family", "text-align", "line-height", "letter-spacing", "color", "text-shadow"],
        visible: false
    },
    {
        name: "Border",
        open: false,
        buildProps: ["border", "border-radius"],
    },
    {
        name: "Decorations",
        open: false,
        buildProps: ["background", "box-shadow"],
    },
    {
        name: "Extra",
        open: false,
        properties: ['opacity', 'transition', 'transform'],
    },
]

export default sectors;