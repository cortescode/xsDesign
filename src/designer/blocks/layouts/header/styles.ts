import type { Editor } from "grapesjs";


const navbarPfx = 'navbar';



export default function loadStyles(editor: Editor) {
    editor.CssComposer.addRules(headerStyles);
}

const headerStyles = `


.transparent-bg {
    background: transparent !important;
}
.${navbarPfx}-container {
    max-width: 950px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    width: 95%;
    height: 100%;
  }


  .${navbarPfx}-items-c {
    display: inline-block;
    float: right;
  }

  .${navbarPfx}-items-mobile {
    display: none;
    width: 100%;
  }

  .${navbarPfx}-brand-wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 5px;
    min-width: 50px;
    height: 100%;
  }

  .${navbarPfx}-brand-wrapper {
    color: #333333;
  }


  .${navbarPfx}-brand {
    font-weight: bold;
    font-size: 22px;
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
    width: 40px;
    height: 40px;
    background-color: #333333;
    fill: white;
    border-radius: 50%;
    padding: 5px 10px;
    display: none;
    float: right;
    cursor: pointer;
    transition: transform .1s ease-in;
    
  }


  @media (max-width: 768px) {
    .${navbarPfx}-items-c {
        display: none;
        width: 100%;
    }

    .${navbarPfx}-items-mobile {
        display: none;
        width: 100%;
      }

    .${navbarPfx}-burger {
      display: grid;
      place-items: center;
      position: fixed;
      inset: 0px 10px auto auto;
      z-index: 6;
    }

    .${navbarPfx}-menu {
      position: fixed;
      inset: 0 0 0 auto;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 20px;
      font-size: 22px;
      background-color: rgba(30, 30, 30, 0.8);
      backdrop-filter: blur(10px);
      width: 90%;
      z-index: 5;
    }

    .${navbarPfx}-menu-link {
      display: block;
    }
  }
`