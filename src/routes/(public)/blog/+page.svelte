<script>
    import Footer from "$UI/sections/Footer.svelte";

</script>
<div class="page-wrapper">
    <div class="page-content">
        <section class="blog-hero animate">
            <h2 class="gradient-text">XsDesign blog</h2>
            <h1>
                Learn about web design, development, no code tools and more.
            </h1>
        </section>

        <div class="articles-list animate">
            <div class="article-preview">
                <div class="image-wrapper">
                    <img src="/media/blog/webpage.jpg" alt="" />
                </div>
                <div class="content-wrapper">
                    <h3>
                        Common Website Design Mistakes and How to Avoid Them
                    </h3>
                    <a class="article-link" href="/blog/posts/common-website-design-mistakes">
                        Read full article 
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
                            <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="promo animate">
        <h2>Curious about building your website?</h2>
        <p>
            Try XsDesign for free and create your website in hours, not weeks.
        </p>
        <a class="designer-button" href="/signup">Start now</a>
    </div>
</div>


<style>
    .blog-hero h1 {
        font-size: 28px;
        font-family: "Comfortaa";
        font-weight: 400;
        width: 100%;
        max-width: 800px;
    }

    .page-wrapper {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 400px;
        place-items: center;
        gap: 40px;
        padding: 20px;
    }

    .page-wrapper section {
        width: 100%;
        max-width: 100%;
    }

    .page-content {
        width: 800px;
        max-width: 100%;
    }

    .articles-list {
        margin-top: 80px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: flex-start center;
        gap: 40px;
    }

    .promo {
        position: fixed;
        inset: 200px 40px auto auto;
        width: 340px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 22px;
        background-color: aliceblue;
        padding: 10px;
        border-radius: 12px;
    }

    .promo h2 {
        font-size: 28px;
        font-weight: 400;
    }

    .article-preview {
        width: 280px;
        background-color: white;
        border-radius: 12px;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        box-shadow: rgba(48, 63, 200, 0.6) 0 0 40px 0;
        transition: 0.2s;
        cursor: default !important;
    }

    .article-preview:hover {
        background: linear-gradient(45deg, rgb(210, 234, 255), white);
        box-shadow: rgba(48, 63, 200, 1) 0 0 60px 0;
    }

    .article-preview .image-wrapper {
        max-height: 200px;
        overflow: hidden;
        width: 100%;
    }

    .article-preview .image-wrapper img {
        width: 100%;
        border-radius: 12px;
    }

    .article-link {
        display: grid;
        grid-template-columns: 1fr auto;
        width: fit-content;
        place-items: center flex-start;
        gap: 10px;
        color: var(--dark);
    }

    .article-link:hover {
        color: var(--blue);
    }

    .article-link svg {
        fill: var(--dark);
        transition: .2s;
    }
    
    .article-link:hover svg {
        fill: var(--blue);
        margin-left: 20px;
    }

    .content-wrapper {
        padding: 20px;
    }

    .content-wrapper h3 {
        margin: 0 0 24px 0;
        font-family: 'Comfortaa';
        font-size: 20px;
    }


    @media screen and (max-width: 767px) {

        .articles-list {
            grid-template-columns: 1fr;
        }
        .page-wrapper {
            grid-template-columns: 1fr;
        }

        .page-content {
            width: auto;
        }

        .blog-hero h1 {
            font-size: 24px;
        }

        .promo {
            display: none;
        }
    }
</style>
