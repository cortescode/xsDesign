<script>
    import { onMount } from 'svelte';
    import { user } from "../../lib/session";
    import { getSessionUserData } from "../../lib/session";

    onMount(() => {
        getSessionUserData().then( (user_data) => user.set(user_data)).catch((error) => {
            console.log(error);
            user.set(null);
        })
	});

</script>

<slot/>