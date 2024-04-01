import type { Editor } from 'grapesjs'


export default function loadHeroComponents(editor: Editor) {

    const { Components } = editor

    Components.addType("hero", {
        model: {
            defaults: {
                name: 'Hero',
                tagName: 'section',
                components: [{
                    type: "grid-child",
                    components: [
                        {
                            type: "grid1x1",
                            components: [
                                {
                                    type: "title",
                                    components: "Set a title for your hero",
                                    style: {
                                        'font-size': "4em",
                                        "margin-top": "20",
                                        "margin-bottom": "40",
                                    }
                                },
                                {
                                    type: "simple-text",
                                    components: "Set the content for the hero paragraph",
                                    style: {
                                        "max-width": "90%",
                                        "font-size": "18px",
                                    }
                                },
                                {
                                    type: "button-link",
                                    components: "Call to Action",
                                    style: {
                                        "margin": "20px"
                                    }
                                }
                            ],
                            style: {
                                "text-align": "center",
                                "display": "grid",
                                "place-items": "center"
                            }
                        },
                    ],
                    style: {
                        "width": "fit-content",
                        "max-width": "96vw",
                    }
                }],
                attributes: {
                    class: "hero"
                },
                editable: true,
                traits: [
                    "id"
                ]
            },
        }

    })

    Components.addType("hero2", {
        model: {
            defaults: {
                name: 'Hero',
                tagName: 'section',
                components: [
                    {
                        type: "grid-child",
                        components: [
                            {
                                type: "grid2x2",
                                components: [{
                                    type: "grid-child",
                                    components: [
                                        {
                                            type: "title",
                                            components: "Set a title for your hero",
                                            style: {
                                                'font-size': "4em"
                                            }
                                        },
                                        {
                                            type: "simple-text",
                                            components: "Set the content for the hero paragraph",
                                            style: {
                                                "max-width": "90%",
                                            }
                                        },
                                        {
                                            type: "button-link",
                                            components: "Call to Action",
                                            style: {
                                                "margin": "20px 10px",
                                                "font-size": "18px",
                                            }
                                        }
                                    ],
                                    style: {
                                        "width": "100%",
                                        "text-align": "left",
                                        "display": "grid",
                                        "align-items": "center",
                                        "justify-items": "left",
                                    },
                                }, {
                                    type: "image",
                                    style: {
                                        "max-width": "100%",
                                        "max-height": "100%",
                                    },
                                }],
                                style: {
                                    "box-sizing": "border-box",
                                    "max-width": "100%",
                                    "width": "1150px",
                                    "display": "grid",
                                    "grid-template-columns": "1fr 1fr",
                                    "padding": "10px",
                                    "place-items": "center",
                                    "gap": "40px",
                                },
                            }
                        ],
                        style: {
                            "width": "fit-content",
                        },
                    }
                ],
                style: {
                    "display": "grid",
                    "grid-template-columns": "1fr",
                    "place-items": "center",
                    "width": "100%",
                    "padding": "120px 20px",
                },
                editable: true,
                traits: [
                    "id"
                ]
            },
        }

    })
}