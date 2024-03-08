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
                            type: "title",
                            components: "Set a title for your hero",
                            style: {
                                'font-size': "4em",
                            }
                        },
                        {
                            type: "simple-text",
                            components: "Set the content for the hero paragraph",
                            style: {
                                "width": "600px",
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
                        "width": "720px",
                        "max-width": "96%",
                        "text-align": "center",
                        "display": "grid",
                        "place-items": "center"
                    },
                }],
                style: {
                    "display": "grid",
                    "padding": "120px 20px",
                    "place-items": "center",
                },
                editable: true,
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
                                        "width": "600px",
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
                            type: "grid-child",
                            components: [
                                {
                                    type: "image",
                                    style: {
                                        "width": "auto",
                                        "height": "100%",
                                    },
                                },
                                
                            ],
                            style: {
                                "width": "100%",
                                "height": "100%",
                                "text-align": "center",
                                "padding": "20px",
                                "display": "grid",
                                "place-items": "center"
                            },
                        }],
                        style: {
                            "max-width": "98%",
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
                    "display": "grid",
                    "grid-template-columns": "1fr",
                    "place-items": "center",
                    "width": "100%",
                    "padding": "120px 20px",
                },
                editable: true,
            },
        }
        
    })
}