<script>

    export let attributes = {
        "tag": "h1",
        "content": "",
        "styles": {
            "width": 600,
            "font-size": 42,
            "font-weight": 900,
            "color": "white"
        }
    }

    export let index;
    export let onAttributesChange;

    let tag_options = ["h1", "h2", "h3", "h4", "h5", "h6"];

    let styles = {
        "width": 600,
    }


    let editable = true;


	let type = 'div';


    $:  {
        attributes;
        styles;
        type = attributes["tag"];
    }

	
	let content
	
	function uplift(node) {
		// content will only be defined after the first render, so all logic can be done in update
		return {
			update({type, content}) {
				const el = document.createElement(`${type}`)
				el.appendChild(content)
				node.appendChild(el)
			}
		}
	}


    function sendValueChange() {
        onAttributesChange(index, attributes)
    }
</script>


<div use:uplift={{ content, type}}>
    <div bind:this={content}>

    </div>
</div>
<div class="options-card">
    <button class="options-card">
        <img src="/media/assets/icons/settings.svg" alt="">
        Settings
    </button>
    <div class="options">
        <input type="range" name="size" bind:value={attributes["styles"]["width"]} on:change={sendValueChange}/>
        <input type="range" name="font-size" bind:value={attributes["styles"]["font-size"]} on:change={sendValueChange}/>
        <input type="range" name="font-size" bind:value={attributes["styles"]["font-weight"]} on:change={sendValueChange}/>
        <input type="color" name="font-size" bind:value={attributes["styles"]["color"]} on:change={sendValueChange}/>
    </div>
    
</div>

<style>
	div {
		/* This removes the divs from the flow, so they do not have any effect on the layout */
		display: contents;
	}
</style>