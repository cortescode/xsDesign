<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Logo from '../Logo.svelte'

    let links = [
      { name: 'analytics', link: '/page-settings' }, 
      { name: 'resources', link: '/page-settings' }, 
    ];

</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header class="header">
    <Logo link="/designer/"></Logo>
  
    
    <nav class="links-list">
        <!-- 
        {#each links as { name, link }}
            <a href={link}>{name}</a>
        {/each}
         -->
    </nav> 

    <div>
        <a href="/designer/create" class="create-button">+ Create Website</a>
    </div>
    
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    header {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 10;

        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        justify-content: space-between;
        justify-items: center;
        background-color: rgb(255, 255, 255);
        height: 46px;

        margin: 0;
        padding: 6px 20px;
        width: calc(100% - 40px);

        border-bottom: 1px solid var(--blue);
        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 20px;
    }

    .logo-container{
        height: auto;
        margin: 0 !important;
        padding: 0 !important;
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
        margin: 0 14px;
        text-decoration: none;
        color: var(--dark);
        font-size: 16px;
    }
    a:hover {
        
        text-decoration: none;
    }

    .create-button {
        background-color: var(--dark);
        color: white;
        padding: 12px 28px !important;
        border-radius: 12px;
        font-size: 18px;
    }

    .create-button:hover {
        background: var(--blue) !important;
        color: white !important;
    }




</style>

