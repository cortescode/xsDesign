

<script>
    let data = [4, 8, 15, 16, 23, 18];
  </script>
  
  
  <section class="overview">
    <div class="web-card">
    </div>
    <div class="chart">
      {#each data as d, i}
        <svg width="20" height={d * 10}>
          <rect x="0" y="0" width="20" height={d *10} class="bar"/>
        </svg>
      {/each}
    </div>
    <div></div>
    <div></div>
  </section>
  
  
  
  <style>
    .overview {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 40px;
    }
  
  
    .web-card img{
      max-width: 100%;
    }
  
  
    .chart {
      display: flex;
      width: 100%;
      align-items: flex-end;
    }
  
    .chart svg {
      margin: 0 2px;
    }
  
    .bar {
      fill: rgb(19, 45, 66);
    }
  </style>
  