






<section class="roadmap animate">  
    <h2>Roadmap</h2>
    <div class="roadmap-container">
        <div class="roadmap-item important">
            <span class="completed-tag">Completed</span>
            <h3>Launch Beta</h3>
            <p>Launch the beta version with the main features: a basic designer to create and download a simple page.</p>
        </div>
        <div class="roadmap-item">
            <span class="completed-tag">Completed</span>
            <h3>Add Grid Layouts</h3>
            <p>Add first support for css grid and adds multiple pre-built grid layouts.</p>
        </div>
        <div class="roadmap-item">
            <span class="completed-tag">Completed</span>
            <h3>Add Responsive Header</h3>
            <p>Create a pre-built responsive header to directly import into your website.</p>
        </div>
        <div class="roadmap-item">
            <span class="completed-tag">Completed</span>
            <h3>Set Up Publishing</h3>
            <p>Allow to publish your project directly inside our platform</p>
        </div>


        <div class="roadmap-item">
            <span class="completed-tag">Completed</span>
            <h3>Implement Payments</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>

        <div class="roadmap-item">
            <span class="in-progress-tag">In progress</span>
            <h3>Shared components</h3>
            <p>Allow to share components across pages. Like headers, footers, etc.</p>
        </div>

        <div class="roadmap-item">
            <span class="in-progress-tag">In progress</span>
            <h3>Improve Editor UI</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>

        <div class="roadmap-item">
            <span class="in-progress-tag">In progress</span>
            <h3>Add first 10 Templates</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>


        <div class="roadmap-item">
            <span class="to-do-tag">To do</span>
            <h3>Add first Animations</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>

        <div class="roadmap-item">
            <span class="to-do-tag">To do</span>
            <h3>Add Forms Support</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>


        <div class="roadmap-item important">
            <span class="to-do-tag">To do</span>
            <h3>Launch Official Version</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>

        <div class="roadmap-item">
            <span class="to-do-tag">To do</span>
            <h3>Add More Pre-Built Components</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>

        <div class="roadmap-item">
            <span class="to-do-tag">To do</span>
            <h3>Add AI Copy Assistant</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>

        <div class="roadmap-item">
            <span class="to-do-tag">To do</span>
            <h3>Add AI Seo Assistant</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>
        
        <div class="roadmap-item">
            <span class="to-do-tag">To do</span>
            <h3>Add AI Designer Assistant</h3>
            <p>In order to offer a better experience, we need to implement a subscription model</p>
        </div>
        
    </div>
</section>


<style>

    .roadmap {
        margin: 20px auto 80px auto;
    }

    .roadmap h2 {
        font-size: 24px;
    }

    .roadmap-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
        place-items: flex-start center;
        gap: 40px;
        margin-top: 60px;
    }

    .roadmap-item {
        box-sizing: border-box;
        border: 1px solid var(--light-blue);
        background-color: white;
        padding: 40px;
        border-radius: 12px;
    }

    .roadmap-item.important {
        background-color: var(--dark);
        color: white;
        box-shadow: 0 10px 20px -4px rgba(62, 117, 255, 0.4);
    }

    .roadmap-item.important h3 {
        color: white;
    }

    .roadmap-item h3 {
        font-family: 'Comfortaa', 'Inter', sans-serif;
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 60px;
    }

    .completed-tag {
        font-weight: bolder;
        background-color: rgb(0, 167, 50);
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        float: right;
    }

    .in-progress-tag {
        font-weight: bolder;
        background-color: rgb(0, 81, 187);
        color: white;
        padding: 8px 12px;
        border-radius: 4px;
        float: right;
    }

    .to-do-tag {
        font-weight: bolder;
        background-color: rgb(255, 69, 69);
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        float: right;
    }

</style>