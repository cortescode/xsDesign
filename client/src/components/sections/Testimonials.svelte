<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    const clients_data = [
        {
            "personImg": "./assets/person.webp",
            "Name": "Pablo Gallego - transportesfrioantakira.com",
            "Review": "Ha sido un placer trabajar con vosotros. En todo momento habeis atendido mis peticiones y habeis solucionado mis dudas."
        },
        {
            "personImg": "./assets/person.webp",
            "Name": "Jose Antonio Barboteo - elbuscadordeagua.com",
            "Review": "Mi experiencia fue de lo mas satisfactoria, muy contento con el resultado final de mi sitio Web. Contaré con vosotros en próximos proyectos, muchas gracias."
        },
        {
            "personImg": "./assets/person.webp",
            "Name": "Oscar Sánchez - bleckin.com",
            "Review": "Gracias por vuestro trabajo y por ser tan amables, ha quedado muy chula la web. Un saludo cordial."
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
<section id="testimonials">
    <h1 class="right-title">¿Qué opinan nuestros clientes?</h1>
    <div class="testimonials-columns">
        <div class="testimonials-video">
            <video src="/media/videos/webs.mp4" autoplay muted playsinline>
                <source media="(min-width: )" srcset="/media/videos/webs.mp4" type="video/mp4">
            </video>
        </div>
        <div class="clients">
            <div class="client-review" class:client-review-animation={animation_active}>
                <div class="testimonial">
                    <!-- <img class="testimonial-person" src="./assets/person.webp" alt=""> -->
                    <div>
                        <img src="/media/assets/icons/star.png" alt="">
                        <img src="/media/assets/icons/star.png" alt="">
                        <img src="/media/assets/icons/star.png" alt="">
                        <img src="/media/assets/icons/star.png" alt="">
                        <img src="/media/assets/icons/star.png" alt="">
                    </div>
                    <h3>{clients_data[selectedReview]['Name']}</h3>
                    <p>
                        {clients_data[selectedReview]['Review']}
                    </p>
                </div>
                <!-- <img class="testimonial-web" src="./assets/page-1.png" alt=""> -->
            </div>
            <div class="reviews-selection">
                <button on:click={moveBack} class="clients-button">
                    <img class="vertical-flip" src="./media/assets/icons/right-arrow.png" alt="">
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

                <button on:click={moveForward} class="clients-button">
                    <img src="./media/assets/icons/right-arrow.png" alt="">
                </button>
            </div>
        </div>
    </div>
</section>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    .testimonials-columns {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        margin-top: 40px;
        gap: 40px;
    }

    .testimonials-video {
        display: flex;
        justify-content: center;
    }

    .testimonials-video video {
        max-height: 100%;
        max-width: 90%;
        padding: 40px;
    }


    .clients {
        max-width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        place-items: center;
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
	    background: linear-gradient(to right, #667eea, #764ba2);
        transition: .2s;
    }


    .clients-button{
        border: none;
        border-radius: 50%;
        grid-row-end: 1;
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        background-color: white !important;
        box-shadow: rgba(100, 100, 110, 0.2) 0px 8px 28px 0px;
        transition: .2s;
        z-index: 10;
    }

    .clients-button img {
        width: 20px;
        height: 20px;
    }
    .clients-button img:hover {
        cursor: pointer;
    }
    .clients-button:hover{
        transform: scale(1.2);
    }
    .clients-button:active {
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
        font-size: 18px;
        transition: .5s;
        align-items: left;
    }



    @media screen and (max-width: 767px){
        .testimonials-columns {
            grid-template-columns: 1fr;
            max-width: 100%;
            place-items: center;
        }

        .testimonials-video {
            max-width: 100%;
            place-items: center;
            padding: 0;
            margin: 0;
        }

        .testimonials-video video {
            padding: 0;
        }

        .clients {
            width: 100%;
        }
        .client-review {
            max-width: 100%;
            max-height: 260px;
            overflow-y: scroll;
            padding: 10px;
            display: inline-block;
            text-align: center;
        }
        .testimonial {
            max-width: 100%;
            padding: 10px;
            text-align: left;
            overflow: hidden;
        }
        .testimonial h3{
            font-size: 18px;
        }
        .testimonial p {
            font-size: 16px;
        }

    }
</style>
