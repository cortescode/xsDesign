<script lang="ts">
    export let link: string = "";
</script>

<a class="logo-container" href="{ link.length > 0 ? link : '/'}">
    <img class="logo-image" src="/media/assets/dark-logo.png" alt="">
    <h1 class="logo logo-header">xsdesign</h1>
</a>


<style>
    .logo {
        font-family: 'comfortaa';
        font-weight: 900;
        color: white;
        width: max-content;
    }


    .logo-container {
        display: grid;
        grid-template-columns: auto auto;
        justify-self: left;
        align-items: center;
        height: fit-content;
    }

    .logo-container h1 {
        font-size: 20px;
        margin: 0;
    }

    .logo-image {
        width: 36px;
        margin-right: 10px;
    }

</style>