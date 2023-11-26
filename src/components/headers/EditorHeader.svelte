<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import DarkLogo from '../DarkLogo.svelte';

    let links = [
      { name: 'settings', link: '/page-settings' },
      { name: 'analytics', link: '/page-settings' },
      { name: 'SEO', link: '/page-seo' },
    ];

</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header cid="header">
    <DarkLogo></DarkLogo>
  
    
    <nav class="links-list">
        {#each links as { name, link }}
            <a href={link}>{name}</a>
        {/each}
    </nav> 

    <div class="buttons">
        <button class="header-button">Save</button>
        <button class="header-button">Publish</button>

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
        background-color: rgb(50, 50, 50);
        height: 40px;

        margin: 0;
        padding: 6px 20px;
        width: calc(100% - 40px);

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 20px;
    }

    .buttons {

    }


    .links-list{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: white;
        margin: 0 14px;
        text-decoration: none;
        font-size: 16px;
        transition: .2s;
    }
    a:hover {
        transform: scale(.9);
    }


    /* BUTTONS STYLES */
    .header-button {
        justify-self: right;
        height: auto;
        font-weight: 14px;
        padding: 4px 8px;
        background-color: rgb(30, 30, 30);
        color: white;
        border: none;
        border-radius: 24px;
        padding: 10px 20px;
        transition: .2s;
    }
    .header-button:hover {
        box-shadow: rgba(255, 255, 255, 0.4) 0 0 10px;
        transform: scale(.9);
    }


</style>

