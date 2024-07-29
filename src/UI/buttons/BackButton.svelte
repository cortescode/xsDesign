

<div class="back-button-wrapper">
    <button class="back-button" on:click={() => window.history.back()}>
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path
                d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
            ></path>
        </svg>
        Back
    </button>
    
</div>
    


<style>


    .back-button {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        text-align: left;
        padding: 6px 18px 6px 12px;
        height: fit-content;
        border-radius: 12px;
        background-color: white;
        border: 1px solid var(--blue);
        width: fit-content;
    }


    .back-button:hover {
        background-color: white;
    }

    .back-button svg {
        transition: padding 0.1s ease-in;
    }
    .back-button:hover svg {
        padding-right: 20px;
    }

    
</style>