<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    let links = [
      { name: 'settings', link: '/page-settings' },
      { name: 'analytics', link: '/page-settings' },
      { name: 'SEO', link: '/page-seo' },
    ];

</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header cid="header">
    <a class="logo logo-header" href="/">
        XS Design
    </a>
  
    
    <nav class="links-list">
        {#each links as { name, link }}
            <a href={link}>{name}</a>
        {/each}
    </nav> 

    <button class="gradient-button header-button">Save</button>
    
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
        z-index: 20;

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 20px;
    }

    .logo-header {
        font-size: 1.4vw;
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
        margin: 0 14px;
        text-decoration: none;
        color: #333;
        font-size: 14px;
    }
    a:hover {
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }



    /* BUTTONS STYLES */
    .header-button {
        justify-self: right;
        height: auto;
        font-weight: 14px;
        padding: 4px 8px;
    }


</style>

