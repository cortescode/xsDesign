<script>
	
	import Header from "../components/Header.svelte"
	import Hero from "../components/Hero.svelte"
	import Portfolio from "../components/Portfolio.svelte"

	fetch('/auth/session', {
            method: 'POST'
        }
		).then((response) => {
            return response.json()
        }
        ).then((data) => {
            console.log(JSON.stringify(data))
        })
</script>


<Header></Header>
<Hero></Hero>
<Portfolio></Portfolio>


<style>

</style>