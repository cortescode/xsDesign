<script lang="ts">
    import { onMount } from "svelte";

    export let data;

    $: feedback = "";

    let feedback_messages: any[] = [];
    $: feedback_messages

    onMount(async () => {
        fetch("/api/feedback", {
            method: "GET",
        })
        .then(async (response) => {
            const response_json = await response.json();

            console.log("response_json: ", JSON.stringify(response_json));
            if (response) 
                feedback_messages = response_json["feedback"].map((feedback_obj: any) => feedback_obj["message"]);
        })
        .catch((error) => console.log("An error has occourred: ", error));
    });

    async function submitFeedback() {
        await fetch("/api/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: feedback }),
        });

        feedback_messages.push(feedback)
        alert(`Thank you for your feedback!`);
        
        feedback = ""; // Clear the feedback after submission
    }
</script>

<section class="feedback animate">
    <h2>Feedback</h2>
    <div class="feedback-form">
        <h2>Propose some new functionality</h2>
        <p>
            Hello! We are building this product for you, so we want to focus on what you'd like to see
            inside our platform. Any idea on improvement is welcome!
        </p>
        <p class="gradient-text">
            We can't wait to hear from you
        </p>

        <textarea
            bind:value={feedback}
            rows="4"
            placeholder="Write your proposal here..."
        ></textarea>
        <button on:click={submitFeedback} class="designer-button"
            >Submit Proposal</button
        >
    </div>

   <!-- <div class="current_feedback">
        <h3>Current Feedback</h3>
        <div class="feedback_messages">
            {#each feedback_messages as feedback_message }
                <div class="feedback_message">
                    <p>{feedback_message}</p>
                </div>
            {/each}
            {#if feedback_messages.length < 1 }
                <div class="feedback_message">
                    <p>There is no feedback yet, be the first in give yours!</p>
                </div>
            {/if}
        </div>
    </div> -->
    
</section>

<style>
    .feedback {
        display: grid;
        place-items: center;
        width: 100%;
        padding: 0;
        margin: 40px auto;
    }

    .feedback h2 {
        font-size: 24px;
        margin-bottom: 20px;
    }


    .feedback-form {
        max-width: 640px;
        margin: 20px;
        padding: 40px;
        background: linear-gradient(
            45deg,
            white,
            var(--light-blue)
        );
        border-radius: 24px;
        box-shadow: 0 20px 30px -10px rgba(0, 81, 173, 0.4);
    }

    .feedback-form * {
        margin: 20px 0;
    }

    .feedback-form h2 {
        font-family: 'Comfortaa', 'Inter', sans-serif;
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

    .current_feedback {
        width: calc(100% - 160px);
        text-align: left;
        margin: 40px; /* Spacing from the previous content */
        padding: 40px;
        background-color: white;
        border-radius: 12px;
    }

    .current_feedback h3 {
        margin: 0 0 40px 0;
    }

    .feedback_messages {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, auto));
        gap: 20px;
    }

    .feedback_message {
        display: block;
        box-sizing: border-box;
        padding: 32px;
        background: linear-gradient(
            45deg,
            white,
            rgb(219, 240, 255),
            rgb(193, 201, 255)
        );
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
    }

    .feedback_message:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }

    .feedback_message p {
        margin: 0;
        color: var(--dark); /* A dark color for the text */
        font-size: 18px; /* Adjust the size as needed */
    }
</style>
