<script>
    import Logo from "$UI/Logo.svelte";

</script>




<div class="page">
    <div class="wrapper">
        <div>
            <Logo></Logo>
        </div>
        <h2 class="gradient-text">
            You have reached your creation limit.
        </h2>
        <p>Currently you can't create more than 3 websites.</p>
        <a href="/designer/" class="designer-button">Return to dashboard</a>
    </div>
</div>


<style>
    .page {
        box-sizing: border-box;
        display: grid;
        place-items: center;
        margin: 0;
        width: 100vw;
        height: 100vh;
    }

    .wrapper {
        display: grid;
        place-items: center;
        gap: 40px;
    }

    .wrapper h2 {
        text-align: center;
        color: var(--dark);
    }


</style>