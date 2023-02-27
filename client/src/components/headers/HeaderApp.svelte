<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    let links = [
      { name: 'Soporte', link: '/support' },
      { name: 'tips', link: '/tips' },
    ];

</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header cid="header">
    <div class="logo-container">
        <a class="logo logo-header" href="/">
            XS Design
        </a>
    </div>
  
    
    <nav class="links-list">
        <!-- 
        {#each links as { name, link }}
            <a href={link}>{name}</a>
        {/each}
        -->
    </nav> 

    <div class="button-container">
        <a href="/contact">Soporte <img class="right-svg" src="/media/assets/icons/config.svg" alt=" " srcset="/media/assets/icons/config.svg"></a>
    </div>
    
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    header {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 10;


        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        justify-items: center;
        background-color: rgb(255, 255, 255);
        height: auto;

        position: sticky;
        inset: 0 0 auto 0;
        z-index: 10;

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 20px;
    }

    .logo-container a {
        height: auto;
    }

    .logo-header {
        font-size: 1.8vw;
        width: auto;
        height: auto;
        align-items: center;
        justify-self: flex-start;
        margin: 0;
        padding: 0;
    }


    .links-list{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        margin: 6px 14px;
        text-decoration: none;
        color: #333;
        font-size: 16px;
    }
    a:hover {
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }



    /* BUTTONS STYLES */

    .button-container {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .button-container a {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .button-container a img {
        width: 18px;
    }


</style>

