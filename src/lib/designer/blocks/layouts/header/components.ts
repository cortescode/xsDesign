import type { Editor } from 'grapesjs';

export default (editor: Editor) => {
  const { Components } = editor;

  const navbarPfx = 'navbar';
  const idContainer = `navbar-container`;
  const idNavMenu = `navbar-menu`;
  const idNavMenuLink = `navbar-menu-link`;
  const idBurgerMenu = `navbar-burger-menu`;
  const idBurgerMenuLine = `navbar-burger-menu-line`;


  Components.addType('navbar', {
    model: {
      defaults: {
        droppable: false,
        name: 'Navbar',
        tagName: "nav",
        components: { type: idContainer },
        style: {
          "background": "#222",
          "color": "#ddd",
          "min-height": "50px",
          "position": "fixed",
          "inset": "0 0 auto 0",
          "width": "100%,"
        },
        styles: `

          .${navbarPfx}-container {
            max-width: 950px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            width: 95%;
          }

          .${navbarPfx}-items-c {
            display: inline-block;
            float: right;
          }


          .${navbarPfx}-brand-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px;
            min-height: 50px;
            min-width: 50px;
          }
          .${navbarPfx}-brand {
            font-weight: bold;
            font-size: 22px;
            color: white;
            text-decoration: none;
          }

          .${navbarPfx}-menu {
            padding: 10px 0;
            display: block;
            float: right;
            margin: 0;
          }

          .${navbarPfx}-menu-link {
            margin: 0;
            color: inherit;
            text-decoration: none;
            display: inline-block;
            padding: 10px 15px;
          }

          .${navbarPfx}-burger {
            margin: 10px 0;
            width: 45px;
            padding: 5px 10px;
            display: none;
            float: right;
            cursor: pointer;
            transition: transform .1s ease-in;
          }

          .${navbarPfx}-burger-line {
            padding: 1px;
            background-color: white;
            margin: 5px 0;
          }

          @media (max-width: 768px) {
            .${navbarPfx}-items-c {
              display: none;
              width: 100%;
            }

            .${navbarPfx}-burger {
              display: block;
              position: fixed;
              inset: 0px 10px auto auto;
              z-index: 1;
            }

            .${navbarPfx}-menu {
              position: fixed;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-end;
              inset: 0 0 0 auto;
              background-color: #222;
              width: 90%;
              z-index: 0;
            }

            .${navbarPfx}-menu-link {
              display: block;
            }
          }
        `,
      },
    }
  });

  Components.addType(idContainer, {
    model: {
      defaults: {
        attributes: { class: `${navbarPfx}-container`, 'data-gjs': 'navbar' },
        name: 'Navbar Container',
        droppable: false,
        draggable: false,
        removable: false,
        copyable: false,
        highlightable: false,
        components: [
          {
            attributes: { class: `${navbarPfx}-brand-wrapper`},
            components: [
              {
                type: 'link',
                content: 'yourwebsite.com',
                attributes: { class: `${navbarPfx}-brand`, href: '/' },
              }
            ]
          },
          {
            components: [
              { type: idBurgerMenu },
              {
                attributes: { class: `${navbarPfx}-items-c`, 'data-gjs': 'navbar-items' },
                components: { type: idNavMenu },
              }
            ]
          }
        ]
      }
    }
  });

  Components.addType(idNavMenu, {
    model: {
      defaults: {
        name: 'Navbar Menu',
        tagName: 'nav',
        attributes: { class: `${navbarPfx}-menu` },
        components: [
          { 
            type: "custom-link", 
            components: 'Home',
            attributes: { 
              class: `${navbarPfx}-menu-link`,
            }
          },
          { 
            type: "custom-link", 
            components: 'About' ,
            attributes: { 
              class: `${navbarPfx}-menu-link`,
            }
          },
          { 
            type: "custom-link", 
            components: 'Contact' ,
            attributes: { 
              class: `${navbarPfx}-menu-link`,
            }
            
          },
        ]
      },
    }
  });

  Components.addType(idBurgerMenu, {
    model: {
      defaults: {
        name: 'Burger',
        draggable: false,
        droppable: false,
        copyable: false,
        removable: false,
        attributes: { class: `${navbarPfx}-burger` },
        components: [
          { type: idBurgerMenuLine },
          { type: idBurgerMenuLine },
          { type: idBurgerMenuLine },
        ],
        script: function () {
          // @ts-ignore
          const currentEl = this as HTMLElement;
          const stringCollapse = 'gjs-collapse';
          const clickEvent = 'click';
          
          let open: boolean = false;


          const toggle = function(ev: Event) {
            ev.preventDefault();
            const navParent = currentEl.closest(`[data-gjs=navbar]`);
            const navItems = navParent?.querySelector(`[data-gjs=navbar-items]`) as HTMLElement;
            var elStyle: any = navItems.style;
            if(navItems && !open) {
              elStyle.display = 'flex';
              currentEl.style.transform = "rotateZ(-45deg) scale(.8)"
              open = true;
            } else if(navItems) {
              elStyle.display = 'none';
              currentEl.style.transform = "rotateZ(0) scale(1)"
              open = false;
            }
          };

          if ( !(stringCollapse in currentEl) ) {
            currentEl.addEventListener(clickEvent, toggle);
          }

        },
      },
    },
  });


  Components.addType(idBurgerMenuLine, {
    model: {
      defaults: {
        name: 'Burger Line',
        droppable: false,
        draggable: false,
        highlightable: false,
        attributes: { class: `${navbarPfx}-burger-line` },
      },
    },
  });

}