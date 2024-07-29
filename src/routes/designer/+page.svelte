<script lang="ts">
    import Logo from "$UI/Logo.svelte";
    import Dashboard from "$lib/dashboard/Dashboard.svelte";

    export let data;
    
</script>


<div class="dashboard-wrapper">
    <Dashboard {data}>
    </Dashboard>
</div>

<section class="mobile-message">

    <div>
        <div>
            <Logo></Logo>
        </div>
        <h2 class="gradient-text">
            You need to access from a computer to manage your websites
        </h2>

        <a href="/auth/logout" class="designer-button">Logout</a>
    </div>
</section>



<style>

    .mobile-message {
        display: none;
    }

    @media screen and (max-width: 820px) {
        .dashboard-wrapper {
            display: none;
        }

        .mobile-message {
            display: grid;

            place-items: center;
            text-align: center;

            padding: 20px;

            width: calc(100% - 40px);
            max-height: calc(100vh - 40px);

        }

        .mobile-message > div {
            display: grid;
            place-items: center;
        }

        .mobile-message h2 {
            margin-top: 40px;
        }

        .mobile-message a {
            margin-top: 20px;
        }
    }
</style>
