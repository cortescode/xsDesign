<script lang="ts">
    import { user } from "$auth/stores/session";
    import { sendEmailVerification } from "firebase/auth";
</script>


<article>
    <label for="email">Email State:</label>
    {#if $user?.emailVerified}
        <span>
            <div class="status-circle green-circle"></div>
            Email verified
        </span>
    {:else}
        <span>
            <div class="status-circle red-circle"></div>
            Email not verified yet
        </span>
        <button class="designer-button" on:click={async () => {
                if ($user) await sendEmailVerification($user)
            }
        }>Send verification email</button>

    {/if}
</article>

<style>
     .status-circle {
        border-radius: 50%;
        display: inline-block;
        margin: 0 10px;
        width: 20px;
        height: 20px;
    }

    .red-circle {
        background-color: red;
    }

    .green-circle {
        background-color: greenyellow;
    }


    article {
        padding: 40px 40px;
        background-color: white;
        border-radius: 18px;
        margin: 20px 0;
        box-shadow: 0 0 40px -20px var(--blue) ;
        max-width: 940px;
        min-width: 600px;
    }

    article label {
        margin: 0 0 10px 0;
        display: block;
        font-size: 20px;
        font-weight: bold;
        color: var(--blue);
        line-height: 1.6em;
    }

    article > span {
        display: block;
        margin-bottom: 20px;
    }


</style>