<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { onMount } from "svelte";

    export let rows;
    export let columns;

    let grid_rows = Array.from({ length: rows }, () => "1fr").join(" ");

    let grid_columns = Array.from({ length: columns }, () => "1fr").join(" ");

    onMount(() => {
        const grid = document.getElementById(grid);

        grid.style.gridTemplateRows = grid_rows;
        grid.style.gridTemplateColumns = grid_columns;
    })
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<div class="grid" id="grid">
    <slot>
        Arrastra aquí tus elementos
    </slot>
</div>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .grid {
        display: grid;
        grid-template: 1fr / 1fr;
    }

    .grid > * {
        border: 1px solid var(--blue);
    }
</style>