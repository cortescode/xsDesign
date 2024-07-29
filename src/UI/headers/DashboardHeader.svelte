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

    <div class="fast-access">
        <a href="/account" class="account-link">
            <span>Manage account</span>
            <img src="/media/assets/icons/profile.png" alt="Account" srcset="/media/assets/icons/profile.png">
        </a>
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


    .account-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin: 0;
        padding-left: 20px;
        border-radius: 12px;
        overflow: hidden;
    }

    .account-link:hover {
        outline: 1px solid var(--dark);
        background-color: var(--blue);
    }

    .account-link span {
        color: white;
    }


    .account-link img{
        width: 40px;
        height: 40px;
    }

    .account-link:hover img{
        box-shadow: rgba(66, 57, 241, 0.4) 0px 2px 20px;
        border-radius: 4px;
    }

    .fast-access {
        display: flex;
        flex-direction: row;
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
        box-sizing: border-box;
        background-color: var(--dark);
        color: white;
        padding: 12px 28px !important;
        border-radius: 12px;
        font-size: 18px;
        height: 40px;
    }

    .create-button:hover {
        background: var(--blue) !important;
        color: white !important;
    }




</style>

