<script lang="ts">

</script>


<section>
    <form method="post">
        <h1>Create your webpage</h1>
        <label for="name">Enter the name of your site:</label>
        <input type="text" name="name">

        <input type="submit" value="Crear">
    </form>
</section>



<style>
    section {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }
    form * {
        display: block;
        margin: 10px;
        width: 100%;
    }

    form h1 {
        max-width: 320px;
    }

    form label {
        margin-top: 20px;
    }

    form input[type="submit"] {
        margin-top: 20px;
        cursor: pointer;
    }
</style>