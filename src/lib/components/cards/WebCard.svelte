<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let imgUrl;
    export let title;
    export let description;
    export let linkUrl;
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<article class="webcard">
    <img class="webcard-img" src="{ imgUrl }" alt="paginaweb" srcset="{ imgUrl }">
    <div class="webcard-info">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <a target="blank" href="{ linkUrl }">Visitar web</a>
    </div>
</article>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .webcard {
        display: block;
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 4px;
        overflow: hidden;
        background-color: white;
        box-shadow: rgba(100, 100, 110, 0.2) 0px 8px 28px 0px;
    }

    @media screen and (min-width: 767px) {
        .webcard:hover .webcard-img {
            top:-132%;
        }

        .webcard:hover .webcard-info {
            top: -132%;
            
        }
    }
    

    .webcard-img {
        position: relative;
        top: 0;
        width: 100%;
        transition: .4s;
    }

    .webcard-info {
        top: 0;
        position: relative;
        padding: 20px;
        max-width: 100%;
        transition: .4s;
    }

    .webcard-info a {
        text-decoration: none;
    }
    .webcard-info a:hover {
        font-weight: bold;
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>