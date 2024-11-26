
<script lang="ts">
    import { logout } from "$auth/auth";

</script>




<button on:click={logout}>
    Logout
</button>


<style>
    button {
        width: 100%;
        height: 100%;
        padding: 12px;
        color: var(--dark-blue);
        background-color: var(--light-blue);
        border: none;
        border-radius: 12px;
        text-align: left;
    }

    button:hover {
        background-color: var(--blue);
        color: white;
    }
</style>