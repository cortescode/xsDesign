

export let agency_template = {
    "assets": [],
    "styles": [
      {
        "selectors": [
          "*"
        ],
        "style": {
          "font-family": "Arial Black, Gadget, sans-serif"
        },
      },
      {
        "selectors": [
          "navbar"
        ],
        "style": {
          "background-color": "#333A73",
          "color": "rgb(221, 221, 221)",
          "min-height": "50px",
          "position": "fixed",
          "width": "100%"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-container"
        ],
        "style": {
          "max-width": "950px",
          "display": "flex",
          "justify-content": "space-between",
          "margin-top": "0px",
          "margin-right": "auto",
          "margin-bottom": "0px",
          "margin-left": "auto",
          "width": "95%"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-items-c"
        ],
        "style": {
          "display": "inline-block",
          "float": "right"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-brand-wrapper"
        ],
        "style": {
          "display": "flex",
          "justify-content": "center",
          "align-items": "center",
          "padding-top": "5px",
          "padding-right": "5px",
          "padding-bottom": "5px",
          "padding-left": "5px",
          "min-height": "50px",
          "min-width": "50px"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-brand"
        ],
        "style": {
          "font-weight": "bold",
          "font-size": "22px",
          "color": "white",
          "text-decoration-line": "none",
          "text-decoration-thickness": "initial",
          "text-decoration-style": "initial",
          "text-decoration-color": "initial",
          "font-family": "Arial Black, Gadget, sans-serif"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-menu"
        ],
        "style": {
          "padding-top": "10px",
          "padding-right": "0px",
          "padding-bottom": "10px",
          "padding-left": "0px",
          "display": "block",
          "float": "right",
          "margin-top": "0px",
          "margin-right": "0px",
          "margin-bottom": "0px",
          "margin-left": "0px"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-menu-link"
        ],
        "style": {
          "margin-top": "0px",
          "margin-right": "0px",
          "margin-bottom": "0px",
          "margin-left": "0px",
          "color": "inherit",
          "text-decoration-line": "none",
          "text-decoration-thickness": "initial",
          "text-decoration-style": "initial",
          "text-decoration-color": "initial",
          "display": "inline-block",
          "padding-top": "10px",
          "padding-right": "15px",
          "padding-bottom": "10px",
          "padding-left": "15px",
          "font-family": "Arial Black, Gadget, sans-serif"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-burger"
        ],
        "style": {
          "margin-top": "10px",
          "margin-right": "0px",
          "margin-bottom": "10px",
          "margin-left": "0px",
          "width": "45px",
          "padding-top": "5px",
          "padding-right": "10px",
          "padding-bottom": "5px",
          "padding-left": "10px",
          "display": "none",
          "float": "right",
          "cursor": "pointer",
          "transition-behavior": "normal",
          "transition-duration": "0.1s",
          "transition-timing-function": "ease-in",
          "transition-delay": "0s",
          "transition-property": "transform"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-burger-line"
        ],
        "style": {
          "padding-top": "1px",
          "padding-right": "1px",
          "padding-bottom": "1px",
          "padding-left": "1px",
          "background-color": "white",
          "margin-top": "5px",
          "margin-right": "0px",
          "margin-bottom": "5px",
          "margin-left": "0px"
        },
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-items-c"
        ],
        "style": {
          "display": "none",
          "width": "100%"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media",
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-burger"
        ],
        "style": {
          "display": "block",
          "position": "fixed",
          "top": "0px",
          "right": "10px",
          "bottom": "auto",
          "left": "auto",
          "z-index": "1"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media",
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-menu"
        ],
        "style": {
          "position": "fixed",
          "display": "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "flex-end",
          "top": "0px",
          "right": "0px",
          "bottom": "0px",
          "left": "auto",
          "background-color": "#FBA834",
          "width": "90%",
          "z-index": "0"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media",
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          "navbar-menu-link"
        ],
        "style": {
          "display": "block"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media",
        "group": "cmp:navbar"
      },
      {
        "selectors": [
          {
            "name": "gjs-row",
            "private": 1
          }
        ],
        "style": {
          "display": "table",
          "padding-top": "10px",
          "padding-right": "10px",
          "padding-bottom": "10px",
          "padding-left": "10px",
          "width": "100%"
        }
      },
      {
        "selectors": [
          {
            "name": "gjs-cell",
            "private": 1
          }
        ],
        "style": {
          "width": "100%",
          "display": "block"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media"
      },
      {
        "selectors": [
          "gjs-cell30"
        ],
        "style": {
          "width": "100%",
          "display": "block"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media"
      },
      {
        "selectors": [
          "gjs-cell70"
        ],
        "style": {
          "width": "100%",
          "display": "block"
        },
        "mediaText": "(max-width: 768px)",
        "atRuleType": "media"
      },
      {
        "selectors": [
          {
            "name": "gjs-cell",
            "private": 1
          }
        ],
        "style": {
          "width": "8%",
          "display": "table-cell",
          "height": "75px"
        }
      },
      {
        "selectors": [
          "#ixjkl"
        ],
        "style": {
          "padding": "220px 10px 200px 10px",
          "background-color": "#387ADF"
        }
      },
      {
        "selectors": [
          "bdg-sect"
        ],
        "style": {
          "max-width": "680px",
          "margin": "0px auto 0px auto",
          "text-align": "center",
          "font-family": "Arial Black, Gadget, sans-serif"
        }
      },
      {
        "selectors": [
          "#icztt"
        ],
        "style": {
          "height": "auto"
        }
      },
      {
        "selectors": [
          "heading"
        ],
        "style": {
          "font-size": "4em",
          "color": "#003f1f"
        }
      },
      {
        "selectors": [
          "paragraph"
        ],
        "style": {
          "color": "#003f1f",
          "font-size": "18px",
          "line-height": "1.5em"
        }
      },
      {
        "selectors": [
          "#iqtsh"
        ],
        "style": {
          "padding": "10px",
          "font-size": "2em",
          "font-family": "Arial Black, Gadget, sans-serif",
          "max-width": "420px"
        }
      },
      {
        "selectors": [
          "column"
        ],
        "style": {
          "padding": "120px 20px 120px 20px"
        }
      },
      {
        "selectors": [
          "#ioqdv"
        ],
        "style": {
          "padding": "10px",
          "font-family": "Arial Black, Gadget, sans-serif",
          "margin": "20px 0 0 0"
        }
      }
    ],
    "pages": [
      {
        "id": "home",
        "component": {
            "type": "wrapper",
            "stylable": [
              "background",
              "background-color",
              "background-image",
              "background-repeat",
              "background-attachment",
              "background-position",
              "background-size"
            ],
            "attributes": {
              "id": "ieqv"
            },
            "components": [
              {
                "type": "navbar",
                "classes": [
                  "navbar"
                ],
                "attributes": {},
                "components": [
                  {
                    "type": "navbar-container",
                    "classes": [
                      "navbar-container"
                    ],
                    "attributes": {
                      "data-gjs": "navbar"
                    },
                    "components": [
                      {
                        "classes": [
                          "navbar-brand-wrapper"
                        ],
                        "components": [
                          {
                            "type": "link",
                            "content": "yourwebsite.com",
                            "classes": [
                              "navbar-brand"
                            ],
                            "attributes": {
                              "href": "/"
                            }
                          }
                        ]
                      },
                      {
                        "components": [
                          {
                            "type": "navbar-burger-menu",
                            "classes": [
                              "navbar-burger"
                            ],
                            "attributes": {
                              "id": "i7ag"
                            },
                            "components": [
                              {
                                "type": "navbar-burger-menu-line",
                                "classes": [
                                  "navbar-burger-line"
                                ],
                                "attributes": {}
                              },
                              {
                                "type": "navbar-burger-menu-line",
                                "classes": [
                                  "navbar-burger-line"
                                ],
                                "attributes": {}
                              },
                              {
                                "type": "navbar-burger-menu-line",
                                "classes": [
                                  "navbar-burger-line"
                                ],
                                "attributes": {}
                              }
                            ]
                          },
                          {
                            "classes": [
                              "navbar-items-c"
                            ],
                            "attributes": {
                              "data-gjs": "navbar-items"
                            },
                            "components": [
                              {
                                "type": "navbar-nav-menu",
                                "classes": [
                                  "navbar-menu"
                                ],
                                "attributes": {},
                                "components": [
                                  {
                                    "type": "custom-link",
                                    "classes": [
                                      "navbar-menu-link"
                                    ],
                                    "attributes": {
                                      "href": "/"
                                    },
                                    "components": [
                                      {
                                        "type": "textnode",
                                        "content": "Home"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "custom-link",
                                    "classes": [
                                      "navbar-menu-link"
                                    ],
                                    "attributes": {
                                      "href": "/"
                                    },
                                    "components": [
                                      {
                                        "type": "textnode",
                                        "content": "About"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "custom-link",
                                    "classes": [
                                      "navbar-menu-link"
                                    ],
                                    "attributes": {
                                      "href": "/"
                                    },
                                    "components": [
                                      {
                                        "type": "textnode",
                                        "content": "Contact"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Row",
                "droppable": ".gjs-cell",
                "resizable": {
                  "tl": 0,
                  "tc": 0,
                  "tr": 0,
                  "cl": 0,
                  "cr": 0,
                  "bl": 0,
                  "br": 0,
                  "minDim": 1
                },
                "classes": [
                  {
                    "name": "gjs-row",
                    "private": 1
                  }
                ],
                "attributes": {
                  "id": "ixjkl"
                },
                "components": [
                  {
                    "name": "Cell",
                    "draggable": ".gjs-row",
                    "resizable": {
                      "tl": 0,
                      "tc": 0,
                      "tr": 0,
                      "cl": 0,
                      "cr": 1,
                      "bl": 0,
                      "br": 0,
                      "minDim": 1,
                      "bc": 0,
                      "currentUnit": 1,
                      "step": 0.2
                    },
                    "classes": [
                      {
                        "name": "gjs-cell",
                        "private": 1
                      }
                    ],
                    "attributes": {
                      "id": "icztt"
                    },
                    "components": [
                      {
                        "tagName": "section",
                        "classes": [
                          "bdg-sect"
                        ],
                        "components": [
                          {
                            "tagName": "h1",
                            "type": "text",
                            "classes": [
                              "heading"
                            ],
                            "components": [
                              {
                                "type": "textnode",
                                "content": "The slogan of your website"
                              }
                            ]
                          },
                          {
                            "tagName": "p",
                            "type": "text",
                            "classes": [
                              "paragraph"
                            ],
                            "components": [
                              {
                                "type": "textnode",
                                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Row",
                "droppable": ".gjs-cell",
                "resizable": {
                  "tl": 0,
                  "tc": 0,
                  "tr": 0,
                  "cl": 0,
                  "cr": 0,
                  "bl": 0,
                  "br": 0,
                  "minDim": 1
                },
                "classes": [
                  {
                    "name": "gjs-row",
                    "private": 1
                  }
                ],
                "attributes": {
                  "id": "i3uz8"
                },
                "components": [
                  {
                    "name": "Cell",
                    "draggable": ".gjs-row",
                    "resizable": {
                      "tl": 0,
                      "tc": 0,
                      "tr": 0,
                      "cl": 0,
                      "cr": 1,
                      "bl": 0,
                      "br": 0,
                      "minDim": 1,
                      "bc": 0,
                      "currentUnit": 1,
                      "step": 0.2
                    },
                    "classes": [
                      {
                        "name": "gjs-cell",
                        "private": 1
                      },
                      "column"
                    ],
                    "attributes": {
                      "id": "ile9g"
                    },
                    "components": [
                      {
                        "type": "text",
                        "attributes": {
                          "id": "iqtsh"
                        },
                        "components": [
                          {
                            "type": "textnode",
                            "content": "Show the possibilities of your product"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "attributes": {
                          "id": "ioqdv"
                        },
                        "components": [
                          {
                            "type": "textnode",
                            "content": "Your website is the place where you can tell what makes you different"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Cell",
                    "draggable": ".gjs-row",
                    "resizable": {
                      "tl": 0,
                      "tc": 0,
                      "tr": 0,
                      "cl": 0,
                      "cr": 1,
                      "bl": 0,
                      "br": 0,
                      "minDim": 1,
                      "bc": 0,
                      "currentUnit": 1,
                      "step": 0.2
                    },
                    "classes": [
                      {
                        "name": "gjs-cell",
                        "private": 1
                      }
                    ],
                    "attributes": {
                      "id": "ix6el"
                    }
                  }
                ]
              }
            ]
          },
      }
    ]
  }
  