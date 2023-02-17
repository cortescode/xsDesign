<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import PortfolioWeb from "./PortfolioWeb.svelte"

    $: {

    }

</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="portfolio">
    <h2>Páginas webs que confían en nuestra plataforma:</h2>
    
    <PortfolioWeb name= "Transportes Frio Antakira" 
        description= "hola" 
        imageUrl= "/media/frioantakira/home_page.png" 
        statistics= {{
            "conversion": 324,
            "visitedPages": 21,
            "generatedList": 34
        }}
    >
    </PortfolioWeb>

    <PortfolioWeb name= "Transportes Frio Antakira" 
        description= "hola" 
        imageUrl= "/media/elbuscadordeagua/home_page.png" 
        statistics= {{
            "conversion": 324,
            "visitedPages": 21,
            "generatedList": 34
        }}
    >
    </PortfolioWeb>

    <PortfolioWeb name= "Molina Day Trader"
        description= "hola" 
        imageUrl= "/media/molinadaytrader/home_page.png" 
        statistics= {{
            "conversion": 324,
            "visitedPages": 21,
            "generatedList": 34
        }}
    >
    </PortfolioWeb>
</section>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .portfolio {
        max-width: 1150px;
    }

</style>