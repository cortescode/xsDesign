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
            <svg class="svg-icon" viewBox="0 0 20 20">
                <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
            </svg>
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

    .svg-icon {
        width: 28px;
    }


    .account-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        margin: 0;
        padding: 8px 8px 8px 20px;
        border-radius: 12px;
        overflow: hidden;
        transition: .2s;
    }

    .account-link:hover {
        outline: 1px solid var(--dark);
        background-color: var(--blue);
    }

    .account-link:hover .svg-icon {
        fill: white;
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

