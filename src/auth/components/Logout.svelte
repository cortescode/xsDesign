
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
        color: white;
        background-color: var(--blue);
        border: none;
        border-radius: none;
        text-align: left;
    }

    button:hover {
        background-color: var(--dark);
    }
</style>