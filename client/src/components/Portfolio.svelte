<script>

    import PortfolioWeb from "./PortfolioWeb.svelte"

    $: {

    }

</script>

<section class="portfolio">
    <h3>Webs we have created</h3>
    
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
        imageUrl= "/media/frioantakira/home_page.png" 
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

<style>
    .portfolio {
        max-width: 1150px;
    }

</style>