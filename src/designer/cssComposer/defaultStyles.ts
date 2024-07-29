

const colorPalette = {
    main: "#DFE321",
    secondary: "#FFFFFF",
    title: "#333333",
    text: "#333333"
}



/* 
IMPORTANT!
Do not use colors, if so it won't be able to be set to transparent.
(As the class is not selected on stylemanager but the component itself, these classes can be overwritten but the properties can't be removed)
*/


const defaultRules = `

* {
    box-sizing: border-box;
}

.hero {
    display: grid;
    box-sizing: border-box;
    padding: 120px 20px;
    place-items: center;
}



.basic-button-link {
  box-sizing: border-box;
  display: block;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: rgb(36, 57, 214);
  color: white;
  font-size: 18px;
  text-decoration: none;
  margin: 10px auto;
  width: fit-content;
}

.basic-button-link:hover {
  background-color: white;
  color: rgb(36, 57, 214);
  outline: 1px solid rgb(36, 57, 214);
}


.basic-link {
  box-sizing: border-box;
  font-size: 18px;
  text-decoration: none;
}

`


export default defaultRules