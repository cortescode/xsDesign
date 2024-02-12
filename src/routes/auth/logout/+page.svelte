<script lang="ts">
    import { goto } from "$app/navigation";
    import { logout } from "$lib/auth";
    import { redirect } from "@sveltejs/kit"
    import { onMount } from "svelte";

    
    logout()
    onMount(() => goto("/", { replaceState: true }))
</script>

<div>
    <h2 class="title gradient-text">
        ¡Nos entristeze verte marchar!
    </h2>
</div>

<style>
    div {
        display: grid;
        place-items: center;
        padding: 80px 20px;
    }
</style>