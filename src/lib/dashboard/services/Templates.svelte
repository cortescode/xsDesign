<script lang="ts">
    
    
    let templates: any[] = [
        {
            uid: "1",
            name: "Digital Marketing Agency",
            image_url: "/media/templates/marketing-agency-template.webp",
        },
        {
            uid: "2",
            name: "Fitness/Personal Trainer",
            image_url: "/media/templates/fitness-template.webp",
        },
        {
            uid: "3",
            name: "Mobile App",
            image_url: "/media/templates/mobile-app-template.webp",
        },
        {
            uid: "4",
            name: "Restaurant Basic",
            image_url: "/media/templates/restaurant-template.webp",
        }
    ];

</script>


<section class="animate">
    <h2>Templates</h2>
    <div class="templates">
        {#each templates as template}
            <article>
                <img src={template.image_url} alt={template.name} />
                <div class="template-info">
                    <h3>{template.name}</h3>
                    <a class="designer-button" href={`/`}>Use Template</a>
                </div>
            </article>
        {/each}
    </div>
</section>


<style>

    section {
        margin: 0px auto 80px auto;
    }

    section h2 {
        font-size: 24px;
        font-weight: lighter;
    }

    .templates {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
        align-items: center;
        gap: 40px;
    }

    .templates article {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 10px 10px 30px -10px rgba(0, 20, 196, 0.4);
        border: 2px solid var(--light-blue);
        gap: 10px;
        background-color: white;
        color: var(--dark);
        border-radius: 12px;
        overflow: hidden;
    }

    .templates article img {
        border-bottom: 4px solid white;
    }

    .template-info {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 0 20px 10px 20px;
        justify-content: space-between;
        gap: 10px;
    }

    .template-info h3 {
        margin: 0;
        font-family: 'Comfortaa', 'Inter', sans-serif;
        color: var(--dark);
        font-size: 20px;
        font-weight: lighter;
    }

    .template-info a {
        background-color: var(--dark);
        color: white;
        font-weight: lighter;
        border: 2px solid white;
    }

    .template-info a:hover {
        background-color: white;
        color: var(--dark);
        font-weight: lighter;
    }
    
</style>

