<script lang="ts">
    import { onMount } from "svelte";

    export let title: string;
    export let description: string;
    export let button: string;
    export let image = "/media/assets/landing-preview.avif";


    let x, y;

    let rotateX = "2deg";
    let rotateY = "-5deg";
    let transform_propertie = `perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY}) scale3d(1, 1, 1)`;


    let web_image: HTMLImageElement;
    

    function modifyImagePerspective(event: { clientX: any; clientY: any; }) {
        x = event.clientX;
        y = event.clientY;
        let width = window.screen.width;
        let height = window.screen.height;

        // With proportions interchanged the move looks better
        let prop_x = (y/height - 0.5) * 8;
        let prop_y = -(x/width - 0.5) * 8;

        rotateX = `${prop_x}deg`;
        rotateY = `${prop_y}deg`;
        transform_propertie = `perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY}) scale3d(1, 1, 1)`;

        web_image.style.transform = transform_propertie;

    }

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<section class="hero-app" on:mousemove={modifyImagePerspective}>
    <div class="hero-app-content animate">
        <!-- 
        <div class="chatgpt-banner">
            <img src="/media/assets/images/chatgpt-logo.png" alt="">
            <h3>ChatGPT <br/>Integrated</h3>
        </div>
         -->
        <h1 class="hero-app-title gradient-text">
            { title }
        </h1>
        <p class="hero-app-description">
            { description }
        </p>
        <a href="/auth/signup" class="hero-app-button">
            { button }
        </a>

    </div>
    <img bind:this={web_image} id="web-image" class="web-img animate" src="{ image }" srcset="{ image }" alt="">
    
</section>



<style>
    .hero-app {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        gap: 120px;
        color: var(--dark);
        text-align: center;
        position: relative;
        padding: 60px;
        max-width: 1280px;
        margin: 0 auto;
    }

    .chatgpt-banner {
        display: grid;
        grid-template-columns: auto auto;
        place-items: center;
        gap: 20px;
        max-width: fit-content;
    }

    .chatgpt-banner img {
        max-width: 58px;
    }

    .chatgpt-banner h3 {
        text-align: left;
        font-size: 18px;
        margin: 0;
    }

    .hero-app-content {
        display: grid;
        grid-template-columns: 1fr;
        line-height: 1.5em;
        place-items: center;
        background: radial-gradient(rgba(59, 15, 255, 0.2), rgba(255, 255, 255, 0) 60%);
    }


    .hero-app-title {
        font-weight: 400;
        letter-spacing: 2px;
        background: radial-gradient(100% 80% at 100% 40%, var(--dark) 40%, #0067ce 80%, #00aeff 100%);
        background-size: 300% 300%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: text-gradient-position 10s ease infinite;
    }


    .hero-app-description {
        max-width: 600px;
        margin-bottom: 40px;
        text-shadow: black 0 0 20px 0;
        font-size: 22px;
    }

    .hero-app-button {
        background: rgb(67, 28, 225);
        padding: 10px 20px;
        border-radius: 12px;
        color: white;
        text-decoration: none;
        font-size: 16px;
        transition: .2s;
    }
    .hero-app-button:hover {
        background: rgb(13, 4, 27);
        box-shadow: rgb(48, 63, 200) 0 0 120px 0;
    }


    .web-img {
        justify-self: center;
        transform-style: preserve-3d;
        max-width: 90%;
        border-radius: 8px;
        max-height: 600px;
        transform: auto;
        box-shadow: rgb(48, 63, 200) 0 0 60px 0;
    }


    @keyframes text-gradient-position {
        0% {
            background-position: 0% 0%;
        }

        25% {
            background-position: 100% 20%;
        }
        50% {
            background-position: 100% 100%;
        }

        75% {
            background-position: 20% 100%;
        }
        100% {
            background-position: 0% 0%;
        }
    }


    @media screen and (max-width: 767px) {
        .hero-app {
            text-align: left;
            grid-template-columns: 1fr;
            padding: 28px;
        }
        .hero-app-description {
            font-size: 18px;
        }

        .hero-app-button {
            justify-self: right;
        }
    }
</style>