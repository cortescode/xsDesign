<script lang="ts">
    import { website } from "$website/stores/website.js";
    export let data
    
    $website = data.website
</script>

<slot/>
      