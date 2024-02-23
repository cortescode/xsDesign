<script lang="ts">
    import { onMount } from "svelte";

    export let data;

    $: feedback = "";

    let feedback_messages: any[] = [];
    $: feedback_messages

    onMount(async () => {
        fetch("/designer/feedback", {
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
        await fetch("/designer/feedback", {
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

<section class="feedback">
    <div class="feedback-form">
        <h1 class="gradient-text">We Value Your Feedback</h1>
        <h3>
            Hello! We've designed this section to simplify the process of
            providing us with your valuable feedback
        </h3>
        <p class="gradient-text">
            We can't wait to hear what you would add or improve on our platform.
        </p>

        <textarea
            bind:value={feedback}
            rows="4"
            placeholder="Please enter your feedback here..."
        ></textarea>
        <button on:click={submitFeedback} class="designer-button"
            >Submit Feedback</button
        >
    </div>

    <div class="current_feedback">
        <h2>Current Feedback</h2>
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
    </div>
    
</section>

<style>
    .feedback {
        display: grid;
        place-items: center;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    .feedback-form {
        max-width: 640px;
        margin: 20px;
        padding: 40px;
        background: linear-gradient(
            45deg,
            white,
            rgb(219, 240, 255),
            rgb(193, 201, 255)
        );
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .feedback-form h3 {
        margin-bottom: 20px;
    }

    .feedback-form textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 4px;
        border: 1px solid #ccc;
        resize: vertical;
    }

    .feedback-form button {
        margin-top: 28px;
    }

    p {
        font-size: 18px;
    }

    .current_feedback {
        width: calc(100% - 160px);
        text-align: left;
        margin: 40px; /* Spacing from the previous content */
        padding: 40px;
        background-color: white;
        border-radius: 12px;
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
