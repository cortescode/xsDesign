

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
            ]

        }]
    },
    {
        name: "Dimension",
        open: false,
        buildProps: ["width", "height"],
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
        buildProps: ["font-size", "font-family", "text-align", "color", "text-shadow"],
        visible: false
    },
    {
        name: "Border",
        open: false,
        buildProps: ["border", "border-radius-c"],
    },
    {
        name: "Decorations",
        open: false,
        buildProps: ["box-shadow", "background"],
    },
]

export default sectors;