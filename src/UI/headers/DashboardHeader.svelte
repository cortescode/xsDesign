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
    <Logo link="/dashboard/"></Logo>
  
    
    <nav class="links-list">
        <!-- 
        {#each links as { name, link }}
            <a href={link}>{name}</a>
        {/each}
         -->
    </nav> 

    <div class="fast-access">
        <a href="/account" class="account-link" title="Manage account">
            <span>Manage account</span>
            <img src="/media/assets/account-icon.png" alt="Manage account">
        </a>
        <a href="/website/create" class="designer-button">+ Create Website</a>
    </div>
    
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    
    header {
        box-sizing: border-box;
        grid-row-start: 1;
        grid-column-start: 1;
        grid-column-end: 10;

        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        justify-content: space-between;
        justify-items: center;
        background-color: rgb(255, 255, 255);
        height: 80px;

        margin: 0;
        padding: 6px 20px;
        width: 100%;

        box-shadow: rgba(193, 189, 255, 0.1) -10px 2px 20px;
    }

    .svg-icon {
        width: 28px;
    }


    .account-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0px;
        margin: 0;
        padding: 4px 8px 4px 20px;
        overflow: hidden;
        transition: .2s;
    }

    .account-link:hover span {
        font-weight: lighter;
        font-size: 14px;
        padding: 6px 30px 6px 20px;
        margin-right: -20px;
        background-color: var(--dark);
        border-radius: 8px 0 0 8px;
        transform: scale(1);
        display: block;
    }

    .account-link span {
        color: white;
        display: none;
    }
    .account-link:hover img {
        outline: 2px solid var(--dark);
        
    }

    .account-link img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transform: rotate(180deg);
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

