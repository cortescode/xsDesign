

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
                units: ['px', '%', "vh", "vw", "em", "rem"],
            }
        ],
    },
    {
        id: "TEXT",
        name: "TEXT",
        open: false,
        properties: [
            {
                type: "radio",
                property: "text-align",
                label: "Text Align",
                // @ts-ignore
                options: [
                    { id: "left", label: "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M 0 1.75 C 0 1.336 0.336 1 0.75 1 L 9.25 1 C 9.664 1 10 1.336 10 1.75 L 10 1.75 C 10 2.164 9.664 2.5 9.25 2.5 L 0.75 2.5 C 0.336 2.5 0 2.164 0 1.75 Z' fill='currentColor'></path><path d='M 0 5.25 C 0 4.836 0.336 4.5 0.75 4.5 L 5.25 4.5 C 5.664 4.5 6 4.836 6 5.25 L 6 5.25 C 6 5.664 5.664 6 5.25 6 L 0.75 6 C 0.336 6 0 5.664 0 5.25 Z' fill='currentColor'></path><path d='M 0 8.75 C 0 8.336 0.336 8 0.75 8 L 5.25 8 C 5.664 8 6 8.336 6 8.75 L 6 8.75 C 6 9.164 5.664 9.5 5.25 9.5 L 0.75 9.5 C 0.336 9.5 0 9.164 0 8.75 Z' fill='currentColor'></path></svg>" },
                    { id: "center", label: "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M 0 1.75 C 0 1.336 0.336 1 0.75 1 L 9.25 1 C 9.664 1 10 1.336 10 1.75 L 10 1.75 C 10 2.164 9.664 2.5 9.25 2.5 L 0.75 2.5 C 0.336 2.5 0 2.164 0 1.75 Z' fill='currentColor'></path><path d='M 2 5.25 C 2 4.836 2.336 4.5 2.75 4.5 L 7.25 4.5 C 7.664 4.5 8 4.836 8 5.25 L 8 5.25 C 8 5.664 7.664 6 7.25 6 L 2.75 6 C 2.336 6 2 5.664 2 5.25 Z' fill='currentColor'></path><path d='M 2 8.75 C 2 8.336 2.336 8 2.75 8 L 7.25 8 C 7.664 8 8 8.336 8 8.75 L 8 8.75 C 8 9.164 7.664 9.5 7.25 9.5 L 2.75 9.5 C 2.336 9.5 2 9.164 2 8.75 Z' fill='currentColor'></path></svg>" },
                    { id: "right", label: "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><path d='M 0 1.75 C 0 1.336 0.336 1 0.75 1 L 9.25 1 C 9.664 1 10 1.336 10 1.75 L 10 1.75 C 10 2.164 9.664 2.5 9.25 2.5 L 0.75 2.5 C 0.336 2.5 0 2.164 0 1.75 Z' fill='currentColor'></path><path d='M 4 5.25 C 4 4.836 4.336 4.5 4.75 4.5 L 9.25 4.5 C 9.664 4.5 10 4.836 10 5.25 L 10 5.25 C 10 5.664 9.664 6 9.25 6 L 4.75 6 C 4.336 6 4 5.664 4 5.25 Z' fill='currentColor'></path><path d='M 4 8.75 C 4 8.336 4.336 8 4.75 8 L 9.25 8 C 9.664 8 10 8.336 10 8.75 L 10 8.75 C 10 9.164 9.664 9.5 9.25 9.5 L 4.75 9.5 C 4.336 9.5 4 9.164 4 8.75 Z' fill='currentColor'></path></svg>" },
                ],
            }
        ],
        buildProps: ["text-align", "color"],
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