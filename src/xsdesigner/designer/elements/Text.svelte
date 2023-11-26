<script>
    import { designing } from "../settings";
    export let text;


    let designing_active;
    
    designing.suscribe((value) => designing_active = value);

    let shown_text = text;

    function setText(event) {
        text = event.target.textContext;
    }
</script>

<p contenteditable="{designing_active}" on:input={setText}>
    {shown_text}
</p>