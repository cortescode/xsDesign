<script>
    import DefaultButton from "../buttons/DefaultButton.svelte";
    import { onMount } from 'svelte';

    let faqs = [
        /* {
            question: "Can I cancel my Workspace plan at any time?",
            answer: "You have the flexibility to cancel your plan at any time. Upon cancellation, you will automatically transition to our free plan, which includes access to 2 Starter sites at no cost. While direct access to your websites will be temporarily restricted, rest assured that your site content will remain preserved and fully recoverable upon plan reactivation.",
            isOpen: false
        }, */
        {
            question: "It is free forever?",
            answer: "Currently, our product is still under development. In our pursuit to create the ultimate website builder, we have opened access to gather extensive feedback and insights for enhancement. Upon launching our initial version, it will be available at an affordable price, along with a permanently free version",
            isOpen: false
        },
        {
            question: "Can I import my website or my code?",
            answer: "Yes, you can import your own code to the editor, but some functionality not supported yet may be lost in the way.",
            isOpen: false
        },
        {
            question: "Are Xsdesign websites SEO-friendly?",
            answer: "Yes, Xsdesign sites are SEO-friendly. Our standards-based code, images optimiztion, and mobile-friendliness by default, all help our websites rank in search.",
            isOpen: false
        },
        {
            question: "¿Can I host my website?",
            answer: "No, currently we do not provide hosting services. You can download your website and publish it wherever you want (for example, you can host your page in github for free). We are currently working on incorpore hosting functionalities for your websites",
            isOpen: false
        },
    ];

    $: faqs;

    let openIndex = -1;

    function toggleFaq(index) {
        if (openIndex === index) {
            openIndex = -1;
        } else {
            openIndex = index;
        }
    }

    onMount(() => {
        openIndex = -1;
    });
</script>

<section class="faqs-section animate">
    <h2 class="title">What the <span class="gradient-color">FaQ</span>?</h2>
    {#each faqs as faq, index}
        <div class="faq" on:click={() => toggleFaq(index)} class:active={openIndex === index}>
            <div class="question-wrapper">
                <h2>{faq.question}</h2>

                <div class="icon">
                    {#if openIndex === index}
                        -
                    {:else}
                        +
                    {/if}
                </div>
            </div>
            {#if openIndex === index}
                <p>{faq.answer}</p>
            {/if}
        </div>
    {/each}
    <div class="button-wrapper">
        <a class="designer-button" href="/auth/signup"> Access beta for free</a>
    </div>
</section>

<style>
    .title {
        font-size: 2.8em;
        max-width: 640px;
        margin-bottom: 0;
        margin-bottom: 40px;
    }

    .faqs-section {
        margin: 40px auto;
        padding: 20px;
        max-width: 1150px;
    }

    .faq {
        padding: 20px;
        margin: 20px 0;
        background-color: #d8e2ff;
        border-radius: 24px;
        cursor: pointer;
        transition: .2s;
    }

    .faq:hover {
        background-color: white;
        box-shadow: #d8e2ff 0 0 40px;
    }

    .faq h2 {
        margin: 0;
        font-weight: bold;
        font-size: 1.6em;
    }

    .faq p {
        display: none;
        font-size: 1.4em;
    }
    .faq p:hover {
        cursor: pointer;
    }

    .faq.active p {
        display: block;
        font-size: 18px;
        margin-top: 20px;
        text-shadow: #ffffff 2px 0 20px;
    }

    .question-wrapper {
        display: grid;
        grid-template-columns: 1fr 40px;
    }

    .question-wrapper:hover {
        cursor: pointer;
    }

    .question-wrapper h2:hover {
        cursor: pointer;
    }

    .question-wrapper .icon {
        font-size: 32px;
    }

    .button-wrapper {
        display: grid;
        justify-content: center;
        margin-top: 40px;
        width: 100%;
    }


    @media screen and (max-width: 767px) {
        .faqs-section {
            padding: 28px;
        }
    }
    
</style>
