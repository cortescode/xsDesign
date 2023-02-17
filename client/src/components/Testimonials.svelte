<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    const clients_data = [
        {
            "personImg": "./assets/person.webp",
            "Name": "Pablo Gallego - Frío Antakira",
            "Review": "Creamos nuestra web con una agencia distinta en su momento, pero decidimos hacerle un lavado de cara con XS Design. Con la nueva web conseguimos el doble de llamadas con la misma visitas."
        },
        {
            "personImg": "./assets/person.webp",
            "Name": "Antonio López - Bleckin",
            "Review": "No se cómo nos permitíamos estar sin página web. Nos han creado una web bastante mejor que la de nuestros competidores y estamos empezando a obtener cada vez más reservas en la web."
        },
        {
            "personImg": "./assets/person.webp",
            "Name": "Oscar Sánchez - Restaurante Aranda",
            "Review": "Muy contento con el resultado, estamos aumentando el número de reservas online."
        },
    ]



    var reviews_amonut = clients_data.length -1; // -1 because the count starts from 0, where it also have an assouciated element
    var selectedReview = 0; // it must be a number between 0 and clients_data length

    // Protect against overflows of selectedReview in reviewsAmount, making shure the selectedReview exists after incrementing or decrementing it
    const secureReviewIncrement = () => 
        selectedReview == reviews_amonut ? 0 : selectedReview+1;

    const secureReviewDecrement = () =>  
        selectedReview == 0 ? reviews_amonut : selectedReview-1;

    

    // Boolean to manage animation
    let animation_active = false;

    
    // Show next review
    function moveForward() {
        animation_active = true;
        
        // it changes content when animation is done and runs the inverse animation
        setTimeout(() => {
            animation_active = false;
            selectedReview = secureReviewIncrement(selectedReview);
        }, 200);
    }

    // Show previous review
    function moveBack() {
        animation_active = true;
        
        // it changes content when animation is done and runs the inverse animation
        setTimeout(() => {
            animation_active = false;
            selectedReview = secureReviewDecrement(selectedReview);
        }, 200);

    }

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="normal-section" id="testimonials">
    <div class="normal-section--title">
        <h2>¿Qué opinan nuestros clientes?</h2>
    </div>
    <div class="clients">
        <div class="client-review" class:client-review-animation={animation_active}>
            <div class="testimonial">
                <!-- <img class="testimonial-person" src="./assets/person.webp" alt=""> -->
                <h3>{clients_data[selectedReview]['Name']}</h3>
                <p>
                    {clients_data[selectedReview]['Review']}
                </p>
            </div>
            <!-- <img class="testimonial-web" src="./assets/page-1.png" alt=""> -->
        </div>
        <div class="reviews-selection">
            <button on:click={moveBack} class="vertical-flip">
                <img src="./media/assets/arrow-icon.png" alt="">
            </button>

            <div class="reviews-circles">
                {#each clients_data as client, i}
                    {#if selectedReview == i}
                        <div class="reviews-circle selected-circle"></div>
                    {:else if selectedReview != i}
                        <div class="reviews-circle"></div>
                    {/if}
                {/each}
            </div>

            <button on:click={moveForward}>
                <img src="./media/assets/arrow-icon.png" alt="">
            </button>
        </div>
    </div>

    <button class="main-button">Obtén presupuesto para tu web</button>
</section>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .clients {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        place-items: center;
        margin-top: 80px;
    }

    .reviews-selection {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        gap: 10px;
        margin-top: 40px;
    }

    .reviews-selection:nth-child(1) button {
        grid-column-end: 1;
        grid-row-end: 1;
    }
    .reviews-circles {
        display: flex;
        grid-row-end: 1;
    }
    .reviews-selection:nth-child(3) button {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-end: 1;
    }

    .reviews-circle {
        width: 20px;
        height: 20px;
        margin: 2px;
        border-radius: 50%;
        background-color: white;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 0px 10px 0px;
        z-index: 10;
        transition: .2s;
    }

    .reviews-circle.selected-circle {
        background-color: rgb(40, 56, 100);
        transition: .2s;
    }


    .clients button{
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        grid-row-end: 1;
        background-color: transparent;
    }

    .clients button img {
        width: 40px;
        border-radius: 50%;
        border: none;
        transition: .2s;
    }
    .clients button img:hover{
        transform: scale(1.2);
    }
    .clients button img:active {
        transform: scale(.6);
    }
    .client-review {
        display: grid;
        grid-row-end: 1;
        height: 320px;
        aspect-ratio: 16/9;
        border-radius: 8px;
        background-color: white;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        perspective: 1000px;

        transition: .2s;
    }
    .client-review-animation {
        transform: scale(.8);
        transition: .2s;
    }

    .client-review-animation .testimonial {
        opacity: 0;

        transition: .2s;
    }

    .testimonial {
        padding: 40px;
        padding-bottom: 20px;
    }
    .testimonial p{
        margin: 20px 0;
        font-size: 16px;
        transition: .5s;
        align-items: left;
    }


    .testimonial-person {
        border-radius: 50%;
        width: 80px;
        aspect-ratio: 1;
        border: 1px solid #00334e;
        object-fit: contain;
        margin-bottom: 20px;
    }
    .testimonial-web {
        width: 98%;
        margin: 1%;
        border-radius: 8px;
    }

    .vertical-flip {
        transform: rotateZ(180deg);
    }



    @media (max-width: 600px) and (orientation: portrait){
        .clients {
            max-width: 100%;
        }
        .client-review {
            aspect-ratio: 1;
            height: 88vw;
            padding: 10px;
            display: inline-block;
            text-align: center;
        }
        .testimonial {
            padding: 28px;
            text-align: left;
        }
        .testimonial h3{
            font-size: 28px;
        }
        .testimonial p {
            font-size: 16px;
        }

    }
</style>
