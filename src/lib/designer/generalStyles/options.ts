import type { Component, Editor } from "grapesjs"

const basic = [

    {
        name: "Dimension",
        open: false,
        buildProps: [
            "width",
            "height",
        ],
        properties: [{
            type: 'number',
            property: 'margin',
            label: 'Margin',
            default: "auto",
            units: ["px", "%", "em", "rem"],
        }, {
            type: 'number',
            property: 'padding',
            label: 'Padding',
            default: "auto",
            units: ["px", "%", "em", "rem"],
        }]

    },
    {
        name: "Border",
        open: false,
        buildProps: [
            "border",
            "border-radius-c",
        ]
    },
    {
        name: "Typography",
        open: false,
        properties: [{
            type: 'radio',
            property: 'font-size',
            label: 'Font Size',
            default: 'block',
            options: [
                { id: '12px', label: 'small' },
                { id: '18px', label: 'normal' },
                { id: '2em', label: 'subtitle' },
                { id: '4em', label: 'title' },
            ]
        }],
        buildProps: [
            "font-size",
            "color",
            "text-shadow",
        ],
    },
    {
        name: "Decorations",
        open: false,
        buildProps: [
            "box-shadow",
        ],
    },
]



const advanced = [
    {
        name: "Position",
        open: false,
        buildProps: [
            "position",
            "top",
            "right",
            "left",
            "bottom",
            "z-index"
        ]
    },
    {
        name: "Display",
        open: false,
        buildProps: [
            "display",
        ],
    },
    {
        name: "Flex",
        open: false,
        buildProps: [
            "flex-direction",
            "flex-wrap",
            "justify-content",
            "align-items",
            "align-content",
            "order",
            "flex-basis",
            "flex-grow",
            "flex-shrink",
            "align-self",
        ],
    },
    {
        name: 'Grid',
        open: false,
        properties: [
            {
                type: "radio",
                name: 'Horizontal Align',
                property: 'justify-items',
                defaults: 'center',
                // @ts-ignore 
                options: [
                    { id: 'start', label: 'Start' },
                    { id: 'end', label: 'End' },
                    { id: 'center', label: 'Center' },
                ],
            },
            {
                type: "radio",
                name: 'Vertical Align',
                property: 'align-items',
                defaults: 'center',
                options: [
                    { id: 'start', label: 'Start' },
                    { id: 'center', label: 'Center' },
                    { id: 'end', label: 'End' },
                ],
            },
            {
                type: 'radio',
                name: 'Columns',
                property: 'grid-template-columns',
                options: [
                    { id: '1fr', label: '1' },
                    { id: '1fr 1fr', label: '2' },
                    { id: '1fr 1fr 1fr', label: '3' },
                ],
            },
            {
                type: 'radio',
                name: 'Rows',
                property: 'grid-template-rows',
                options: [
                    { id: '1fr', label: '1' },
                    { id: '1fr 1fr', label: '2' },
                    { id: '1fr 1fr 1fr', label: '3' },
                ],
            },

            {
                name: 'Gap',
                property: 'gap',
                type: 'number',
                defaults: '10px',
                // @ts-ignore 
                units: [
                    "px",
                    "%"
                ]
            },
        ],
    },
    {
        name: 'Grid Child',
        open: false,
        properties: [
            {
                type: 'radio',
                property: 'grid-column',
                label: 'Size in columns',
                default: 'span 1',
                options: [
                    { id: 'span 1', label: '1' },
                    { id: 'span 2', label: '2' },
                    { id: 'span 3', label: '3' },
                    { id: 'span 4', label: '4' },
                ]
            }, {
                type: 'radio',
                property: 'grid-row',
                label: 'Size in rows',
                default: 'span 1',
                options: [
                    { id: 'span 1', label: '1' },
                    { id: 'span 2', label: '2' },
                    { id: 'span 3', label: '3' },
                    { id: 'span 4', label: '4' },
                ]
            },
        ],
    },
    {
        name: "Size",
        open: false,
        buildProps: [
            "width",
            "height",
            "max-width",
            "max-height",
            "min-midth",
            "min-height",
        ],
    },
    {
        name: "Margin",
        open: false,
        properties: [{
            type: 'number',
            property: 'margin',
            label: 'margin',
            default: "0",
            units: ["px", "%", "em", "rem"],
        }, {
            type: 'composite',
            property: 'margin',
            label: 'margin sides',
            properties: [
                { type: 'number', units: ["px", "%", "em", "rem"], default: '0', property: 'margin-top' },
                { type: 'number', units: ["px", "%", "em", "rem"], default: '0', property: 'margin-right' },
                { type: 'number', units: ["px", "%", "em", "rem"], default: '0', property: 'margin-bottom' },
                { type: 'number', units: ["px", "%", "em", "rem"], default: '0', property: 'margin-left' },
            ]
        }],
    }, {
        name: "padding",
        open: false,
        buildProps: [
            "padding",
        ],
    }, {
        name: "border",
        open: false,
        buildProps: [
            "border-radius-c",
            "border-radius",
            "border"
        ],
    },
    {
        name: "Typography",
        open: false,
        properties: [{
            type: 'number',
            property: 'font-size',
            label: 'Font size',
            default: "18",
            units: ["px", "%", "em", "rem"],
        }],
        buildProps: [
            "font-family",
            "font-size",
            "font-weight",
            "letter-spacing",
            "color",
            "line-height",
            "text-shadow",
            "size-selector",
        ],
    },
    {
        name: "Decorations",
        open: false,
        buildProps: [
            "box-shadow",
        ],
    },
    {
        name: "Extra",
        open: false,
        buildProps: ["transition", "perspective", "transform"],
    },
]

export const options = [
    {
        name: "basic",
        sections: basic
    },
    {
        name: "advanced",
        sections: advanced
    }
]

let selectedOption: Array<any> = basic;



export function loadSectorsManager(editor: Editor) {


    const { StyleManager } = editor
    editor.on('component:selected', (selectedComponent: Component) => {
        if (!selectedComponent) return

        const displayStyle = selectedComponent.getStyle()['display'];

        console.log("running")
        if (displayStyle === 'flex') {
            selectedOption?.find((section: any) => {
                if (section && section.name == "Flex") {
                    const sectorExists = StyleManager.getSector(section.name);
                    if (!sectorExists)
                        StyleManager.addSector('Flex', section, {
                            "at": 0
                        });
                }


            })
        } else {
            console.log("Removing")
            if (StyleManager.getSector("Flex"))
                StyleManager.removeSector('Flex');
        }

        let el = selectedComponent?.getEl()
        if (el && window.getComputedStyle(el).display === 'grid') {
            selectedOption?.find((section: any) => {
                if (section && section.name == "Grid") {

                    const sectorExists = StyleManager.getSector(section.name);
                    if (!sectorExists)
                        StyleManager.addSector('Grid', section, {
                            "at": 0
                        });
                }

            })
        } else {

            if (StyleManager.getSector("Grid"))
                StyleManager.removeSector('Grid');
        }

        let parent = selectedComponent.parent()
        let parentEl = parent?.getEl()
        if (parentEl && window.getComputedStyle(parentEl).display === 'grid') {
            selectedOption?.find((section: any) => {
                if (section && section.name == "Grid Child") {

                    const sectorExists = StyleManager.getSector(section.name);
                    if (!sectorExists)
                        StyleManager.addSector('Grid Child', section, {
                            "at": 1
                        });
                }
            })
        } else {

            if (StyleManager.getSector("Grid Child"))
                StyleManager.removeSector('Grid Child');
        }

        const componentTag = selectedComponent.attributes.tagName
        const textTags = ["p", "span", "quote", "h1", "h2", "h3", "h4", "h5", "h6"]
        if (componentTag) {

            if (textTags.includes(componentTag)) {

                selectedOption?.find((section: any) => {
                    if (section && section.name == "Typography")
                        StyleManager.addSector('Typography', section, {
                            "at": 1
                        });
                })
            }
            else {
                if (StyleManager.getSector("Typography"))
                    StyleManager.removeSector('Typography');
            }
        }
    })

}

const RestringedSections = ["Flex", "Grid", "Grid Child", "Typography"]
export function selectStylesOption(editor: Editor, name: string) {
    const { StyleManager } = editor;

    StyleManager.clear()
    console.log("Setting")

    for (let option of options) {
        if (option.name === name) {

            StyleManager.getSectors().reset(option.sections)

            selectedOption = option.sections
        }
    }
}