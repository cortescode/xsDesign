<script>

    let faqs = [
        {
            question: "¿Existe devolución?",
            answer: "Ejemplo",
        } ,
        {
            question: "¿Cuanto tiempo tardais en creaar la web?",
            answer: "Ejemplo",
        } ,
        {
            question: "¿Cuanto tiempo tardais en creaar la web?",
            answer: "Ejemplo",
        } ,
        {
            question: "¿Cuanto tiempo tardais en creaar la web?",
            answer: "Ejemplo",
        } ,
    ]

</script>

<section class="faqs-section">
    {#each faqs as faq}
        <div class="faq">
            <h2>{ faq.question }</h2>
            <button class="toggle"></button>
            <p>{ faq.answer }</p>
        </div>
    {/each}
</section>

<style>
    
</style>