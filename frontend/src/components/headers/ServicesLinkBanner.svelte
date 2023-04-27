<script>

</script>

<ul class="links-list">
    <li>
        <a href="/agency/services/web-design">
            <img src="/media/assets/icons/ico-design.svg" alt="">
            <span>Diseño y optimización Web.</span>
        </a>
    </li>
    <li>
        <a href="/agency/services/ecommerce-creation">
            <img src="/media/assets/icons/ico-dev.svg" alt="">
            <span>Creación de Tiendas Online</span>
        </a>
    </li>
    <li>
        <a href="/agency/services/seo-positioning">
            <img src="/media/assets/icons/ico-devsec.svg" alt="">
            <span>Posicionamiento SEO</span>
        </a>
    </li>
    <li>
        <a href="/agency/services/web-development">
            <img src="/media/assets/icons/ico-embedded.svg" alt="">
            <span>Desarrollo de Aplicaciones Web</span>
        </a>
    </li>
</ul>


<style>
    .links-list {
        width: 520px;
        justify-self: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: white;
        border-radius: 12px;
        padding: 28px;
        list-style: none;
        gap: 40px;
        margin-block: 0;
        box-shadow: rgba(100, 100, 110, 0.4) 0px 8px 28px 0px;

    }
    .links-list:hover {
        cursor: auto;
    }

    .links-list li a {
        display: grid;
        grid-template-columns: 28px auto;
	    background-clip: none;
    	-webkit-background-clip: none;
	    -webkit-text-fill-color: none;
	    color: black;
        gap: 20px;
        text-align: left;
        transition: .2s;
    }
    .links-list li a:hover {
        transform: scale(.9);
        cursor: pointer;
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }

    .links-list li a img{
        display: block;
        text-decoration: none;
        width: 28px;
    }
</style>