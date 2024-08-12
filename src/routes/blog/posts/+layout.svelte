<script>
    import HeaderApp from "$UI/headers/HeaderApp.svelte";

</script>


<div class="post-wrapper">
    <section>
        <slot/>
    </section>
</div>



<style>

    .post-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
    }

    section {
        box-sizing: border-box;
        width: 100%;
        max-width: 800px;
    }
</style>