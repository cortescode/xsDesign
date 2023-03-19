<script>
    let draggedItem = null;
  
    function handleDragStart(event) {
      draggedItem = event.target;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', draggedItem.dataset.id);
      event.target.classList.add('dragging');
    }
  
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      event.target.classList.add('dragover');
    }
  
    function handleDragLeave(event) {
      event.target.classList.remove('dragover');
    }
  
    function handleDrop(event) {
      event.preventDefault();
      const id = event.dataTransfer.getData('text/plain');
      const droppedItem = document.querySelector(`[data-id="${id}"]`);
      if (droppedItem !== event.target) {
        event.target.parentNode.insertBefore(draggedItem, event.target);
      }
      event.target.classList.remove('dragover');
    }
  
    function handleDragEnd(event) {
      draggedItem.classList.remove('dragging');
      draggedItem = null;
    }
</script>


<div class="container">
    <div class="item" 
        draggable="true"
        on:dragstart={handleDragStart}
        on:dragover={handleDragOver}
        on:dragleave={handleDragLeave}
        on:drop={handleDrop}
        on:dragend={handleDragEnd}
        data-id="dropable">
            <slot>
                No component to drag and drop
            </slot>
    </div>
</div>


<style>
    .item {
      padding: 10px;
      margin: 5px;
      background-color: #eee;
      cursor: move;
      width: fit-content;
    }
  
    .item.dragging {
      background-color: #ffffff;
      border: 1px solid rgb(0, 213, 255);
    }
  
    .container {
      display: flex;
      flex-wrap: wrap;
    }
  
    .container .item {
      flex: 1 1 calc(33.33% - 10px);
    }
  
    .container .item.dragover {
      background-color: #ddd;
    }
</style>
  