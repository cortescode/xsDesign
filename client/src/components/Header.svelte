<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { user } from '../session.js';
    import { onMount } from 'svelte';

    let links = [
      { name: 'home', link: '/' },
      { name: 'how we work', link: '/how-we-work' },
      { name: 'testimonials', link: '/testimonials' },
      { name: 'contact', link: '/contact' }
    ];

    console.log($user)

</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header id="header">
    <div class="logo-container">
      <h1 class="logo logo-header">XS Design</h1>
    </div>
  
    <nav class="links-list">
        {#each links as { name, link }}
            <a href={link}>{name}</a>
        {/each}
    </nav>
    <div class="button-container">
        {#if ($user == null) || !("username" in $user) }
            <a href="/auth" class="login-link">Login</a>
            <button onclick="location.href='/pricing'" class="gradient-button">Pricing</button>
        {:else }
            <a href="/auth/logout" class="login-link">Logout</a>
            <button onclick="location.href='/dashboard'" class="gradient-button">Dashboard</button>
        {/if}
    </div>
    
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    header {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        justify-items: center;
        background-color: rgb(255, 255, 255);
        padding: 0 40px;
        width: calc(100% - 80px);

        position: sticky;
        inset: 0 0 auto 0;
        z-index: 10;

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
    }

    .logo-header {
        font-size: 1.8vw;
        width: auto;
        align-items: center;
        justify-self: flex-start;
    }

    .links-list{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        margin: 4px 10px;
        text-decoration: none;
        color: #333;
    }
    a:hover {
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }

    .login-link {
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid rgb(0, 8, 73);
    }


    /* BUTTONS STYLES */

    .button-container {
        display: flex;
        justify-content: right;
        align-items: center;
    }


</style>

