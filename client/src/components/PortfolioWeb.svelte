<!-- ----------------JavaScript---------------- -->

<script>
import { onMount } from 'svelte';

// Variables exportadas para ser utilizadas en el componente
export let name
export let description
export let imageUrl
export let statistics = {
    "conversion": 345,
    "visitedPages": 12,
    "generatedLists": 32
}


// Get the instance id to can execute the animatios individualy
let instance_id = generateRandomId()

// DOM ELEMENTS (We have to assign them after they are mounted)
let portfolio_web; // Used to get position
let rect; // Portfolio Web getBoundingClientRect
let visuals; // Used to modify his styles and trigger an animation
let info; // Used to modify his styles and trigger an animation


// This funcion is executed once the DOM is mounted
// Basically assign the dom elements created above
onMount(() => {
    // Get the portfolio web element and the rect in order to get the position
    portfolio_web = document.getElementById("portfolio-web-"+instance_id)
    rect = portfolio_web.getBoundingClientRect() 

    //Geting 
    visuals = document.getElementById("visuals-"+instance_id)
    info = document.getElementById("info-"+instance_id)

    visuals.classList.remove("in-view")
    info.classList.remove("in-view")
})

// Checking if the portfolio web is visible every 500 miliseconds
setInterval(() => handleVisible(), 500)


// boolean to chek if the element is visible
let show = false;

// Función para manejar la visibilidad del elemento
function handleVisible() {

    // Calcing collision limits of the element respect to window in order to check if the element is visible
    let collision_limits = [
        rect.top - window.innerHeight, 
        (rect.top - window.innerHeight + portfolio_web.offsetHeight/2)]


    // Si el scroll de la página está dentro de los límites de colisión
    if(window.pageYOffset > collision_limits[0]) {
        if (show == false) {
            show = true
            visuals.classList.add("in-view")
            info.classList.add("in-view")
        }
        return
    }
    
    if((window.pageYOffset < collision_limits[0] || window.pageYOffset > collision_limits[1])) {
        if(show != false) {
            show = false
            visuals.classList.remove("in-view")
            info.classList.remove("in-view")
        }
        
    }
}

/* 
Generate a random Id in order to trigger animations in different times, the random Id is added to the normal id of the elements
in such a way that the different instances have different ids
*/
function generateRandomId() {
    return Math.floor(Math.random()*100)
}



</script>





<!-- ----------------HTML---------------- -->

 
<article class="portfolio-web" id={"portfolio-web-"+instance_id}>
    <div class="visuals in-view" id={"visuals-"+instance_id}>
        <img src={imageUrl} srcset="{imageUrl}" alt="{name}"/>
    </div>
    <div class="info in-view" id={"info-"+instance_id}>
        <h1>{name}</h1>
        <p>
            {description}
        </p>
        <div>
            <div>
                <img src="" alt="">
                <span>Conversión <b>+{statistics["conversion"]}%</b></span>
            </div>
            <div>
                <img src="" alt="">
                <span>Páginas visitadas <b>+{statistics["visitedPages"]}%</b></span>
            </div>
            <div>
                <img src="" alt="">
                <span>Leads generados <b>+{statistics["generatedList"]}%</b></span>
            </div>
        </div>
    </div>
</article>





<!-- ----------------CSS---------------- -->

<style>
    .portfolio-web {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 40px 0;
        position: relative;
    }

    .visuals {
        transform: translate3d(50%, 0, 1px);
        z-index: 1;
        transition: .6s;
    }
    .visuals img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 16px;
    }
    .visuals.in-view {
        transform: translate3d(0, 0, 0);
        transition: .6s;
    }

    .info {
        margin-inline-start: 24px;
        margin-inline-end: 24px;
        transform: translate3d(-50%, 0, 0);
        z-index: 0;
        transition: .6s;
    }
    .info.in-view {
        transform: translate3d(0, 0, 0);
        transition: .6s;
    }
    .info h1{
        font-weight: 400;
    }

</style>
  
