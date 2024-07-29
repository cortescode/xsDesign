
const navbarPfx = 'navbar';
const rules = `

* {
    box-sizing: border-box;
}

.hero {
    display: grid;
    box-sizing: border-box;
    padding: 120px 20px;
    place-items: center;
}


.transparent-bg {
    background: transparent !important;
}


.basic-button-link {
  box-sizing: border-box;
  display: block;
  padding: 10px 20px;
  border-radius: 24px;
  background-color: #ff3636;
  color: white;
  font-size: 1.4em;
  text-decoration: none;
  margin: 10px auto;
  font-family: Comfortaa;
  padding: 10px 20px;
  width: fit-content;
}

.basic-button-link:hover {
  background-color: #333333;
  color: white;
  box-shadow: 0 0 40px -5px #ff3636;
}


.basic-link {
  box-sizing: border-box;
  font-size: 18px;
  text-decoration: none;
}



.${navbarPfx} {
    color: #dd;
    min-height: 50p;
    position: fixed;
    inset: 0 0 auto ;
    width: 100;
    z-index: 5;
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

    .${navbarPfx}-items-mobile {
        display: none;
        width: 100%;
      }

    .${navbarPfx}-burger {
      display: block;
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


export default rules