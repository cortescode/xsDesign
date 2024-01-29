<script lang="ts">
    import { goto } from "$app/navigation";
    import { logout } from "$lib/auth";
    import { redirect } from "@sveltejs/kit"
    import { onMount } from "svelte";

    
    logout()
    onMount(() => goto("/", { replaceState: true }))
</script>


<h2 class="title">
    ¡Nos entristeze verte marchar!
</h2>