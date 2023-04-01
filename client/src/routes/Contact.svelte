
<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
	import Header from "../components/headers/Header.svelte";
	import Hero from "../components/heros/Hero.svelte";
    import ContactForm from "../components/forms/ContactForm.svelte";

    import { animate } from '../utils/animations/animate.js'

	import { onMount } from 'svelte';


	onMount(() => animate());
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<main class="contact">
    <ContactForm></ContactForm>
</main>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .contact {
        margin: 0 auto;
        padding: 40px 20px;
        display: grid;
        place-items: center;
    }

</style>