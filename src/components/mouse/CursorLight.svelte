<script>
    let mouseX = 0;
    let mouseY = 0;
  
    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
  </script>
  
  <style>
    .light {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: yellow;
      border-radius: 50%;
    }
  </style>
  
  <div on:mousemove={handleMouseMove} style="position: relative; width: 100vw; height: 100vh;">
    <div class="light" style="left: {mouseX}px; top: {mouseY}px;"></div>
  </div>
  