<script>
    import { fix_position } from "svelte/internal";

    let links = [
      { name: 'home', link: '/' },
      { name: 'how we work', link: '/how-we-work' },
      { name: 'testimonials', link: '/testimonials' },
      { name: 'contact', link: '/contact' }
    ];

</script>
  


<!-- HTML CONTENT -->

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
        <a href="/auth" class="login-link">Login</a>
        <button onclick="location.href='/pricing'">Pricing</button>
    </div>
    
</header>




<!-- STYLES -->

<style>
    header {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        justify-items: center;
        background-color: rgb(255, 255, 255);

        position: fixed;
        top: 0;
        z-index: 10;

        box-shadow: rgba(4, 0, 80, 0.2) -10px 2px 20px;
    }

    .logo-header {
        font-size: 1.8vw;
        margin: 4px 10px;
        width: auto;
        align-items: center;
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

