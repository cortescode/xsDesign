<script>
    import { goto } from "$app/navigation";
    import Logo from "$lib/components/Logo.svelte";
    import DefaultButton from "$lib/components/buttons/DefaultButton.svelte";
    import { user } from "$lib/stores/session";
    import { onMount } from "svelte";

</script>


{#if $user }
    <slot></slot>
{:else }
    <section>
        <div>
            <Logo></Logo>
        </div>
        
        <div class="animate">
            <h2 class="gradient-text">Necesitas tener una cuenta para acceder a esta ruta</h2>
        </div>
        <div>
            <DefaultButton text="Iniciar Sessión" action={() => {
                goto("/auth/login")
            }}></DefaultButton>
        </div>
    </section>
{/if }

<style>
    section {
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
    }

    div {
        margin: 20px;
    }

    h2 {
        text-align: center;
    }
</style>