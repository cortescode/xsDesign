

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
    font-family: Comfortaa;
}

`


export default defaultRules