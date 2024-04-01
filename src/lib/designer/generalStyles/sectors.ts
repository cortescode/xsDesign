

const sectors = [
    {
        id: "DISPLAY",
        name: "DISPLAY",
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
        id: "SIZE",
        name: "SIZE",
        open: false,
        buildProps: ["width", "height", "max-width", "max-height", "min-width", "min-height"],
    },
    {
        id: "MARGIN & PADDIN",
        name: "MARGIN & PADDIN",
        open: false,
        properties: [
            
            {
                type: 'margin-and-padding',
                label: "",
                properties: ["margin", "padding"],
                full: true,
                units: ['px', '%'],
            }
        ],
    },
    {
        id: "TEXT",
        name: "TEXT",
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
        id: "BORDER",
        name: "BORDER",
        open: false,
        buildProps: ["border", "border-radius"],
    },
    {
        id: "BACKGROUND",
        name: "BACKGROUND",
        open: false,
        buildProps: ["background"],
    },
    {
        id: "SHADOWS",
        name: "SHADOWS",
        open: false,
        buildProps: ["box-shadow"],
    },
    {
        name: "EXTRA ",
        open: false,
        properties: ['opacity', 'transition', 'transform'],
    },
]

export default sectors;