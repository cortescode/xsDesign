<script lang="ts">
    export let link : string = "";
</script>

<a class="logo-container" href="{ link.length > 0 ? link : '/' }">
    <img class="logo-image" src="/media/assets/logo1.png" alt="">
    <h1 class="logo logo-header">xsdesign</h1>
</a>


<style>
    .logo {
        font-family: 'comfortaa';
        font-weight: 900;
        color: #341B4D;
        width: max-content;
    }

    .logo-container {
        display: grid;
        grid-template-columns: 36px auto;
        gap: 10px;
        justify-self: left;
        align-items: center;
        height: fit-content;
        border-radius: 18px;
        background-color: white;
        padding: 4px 10px;
        width: fit-content;
    }

    .logo-container h1 {
        font-size: 20px;
        margin: 0;
    }

    .logo-image {
        width: 36px !important;
        margin-right: 10px;
    }

</style>