<script lang="ts">
    import { goto } from "$app/navigation";
    import { user, userPlan } from "$auth/stores/session";
    import { PLANS } from "$auth/subscriptions/plans";
    import Feedback from "$lib/dashboard/services/Feedback.svelte";
    import DashboardHeader from "$UI/headers/DashboardHeader.svelte";
    import { data } from "$website/templates/sites/agency/data";
    import { onMount } from "svelte";

    let downgraded = $state(false);
    let feedback = $state("");
    let error = $state(false);


    onMount(async () => {
        if($userPlan === PLANS.Starter) {
            goto("/dashboard");
        } 
    });



    async function setStarterPlan(user_uid: string | undefined) {

        const response = await fetch("/api/subscriptions/set-starter-plan", {
            method: "POST",
            body: JSON.stringify({ user_id: user_uid }),
        });

        if (response.ok) {
            console.log("Plan set to starter");
            localStorage.setItem("plan", PLANS.Starter);
            $userPlan = PLANS.Starter;
            downgraded = true;
        } else {
            error = true;
        }

    }

    async function submitFeedback() {
        if (feedback === "") {
            alert("Please write your feedback before submitting");
            return;
        }

        await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: feedback }),
        });

        feedback = ""; // Clear the feedback after submission
    }
</script>

<DashboardHeader></DashboardHeader>

<section class="feedback">
    {#if downgraded}
        <h1>You are now on the Starter Plan</h1>
        <a class="designer-button" href="/dashboard">Go to dashboard</a>
        <div class="feedback-form">
            <h2>Hi There!</h2>
            <p>
                You have successfully downgrade your plan to starter. We'd like to
                know, Why did you decided to downgrade your plan? Your feedback is
                important to us! This is what helps us to improve our product.
            </p>
            <p class="gradient-text">Give us your feedback 100% anonymous.</p>

            <textarea bind:value={feedback} rows="4" placeholder="..."></textarea>
            <button onclick={submitFeedback} class="designer-button"
                >Submit Feedback</button
            >
        </div>
    {:else if error}
        <h1>There was an error downgrading your plan</h1>
        <p>Please try again later</p>
        <button onclick={() => setStarterPlan($user?.uid)} class="designer-button">Try again</button>
    {:else}
        <h1>Downgrading to Starter</h1>
        <p>¿Are you sure you want to downgrade your plan?</p>
        <button onclick={() => setStarterPlan($user?.uid)} class="designer-button">Confirm and Downgrade</button>
    {/if}
   
</section>

<style>
    .feedback {
        display: grid;
        place-items: center;
        width: 100%;
        padding: 0;
        margin: 0 auto 40px auto;
    }

    .feedback h1 {
        font-size: 40px;
        margin-bottom: 20px;
    }

    .feedback h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .feedback-form {
        max-width: 640px;
        margin: 20px;
        padding: 40px;
        background: linear-gradient(45deg, white, var(--light-blue));
        border-radius: 24px;
        box-shadow: 0 20px 30px -10px rgba(0, 81, 173, 0.4);
    }

    .feedback-form * {
        margin: 20px 0;
    }

    .feedback-form h2 {
        font-family: "Comfortaa", "Inter", sans-serif;
        font-size: 24px;
        margin-bottom: 20px;
    }

    .feedback-form textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 4px;
        border: 1px solid #ccc;
        resize: none;
        font-size: 18px;
        font-family: Comfortaa;
    }

    .feedback-form button {
        margin-top: 28px;
    }

    p {
        font-size: 16px;
    }
</style>
