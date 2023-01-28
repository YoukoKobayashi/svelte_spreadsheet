<script lang="ts">
import Cell from './Cell.svelte';


let cellContents:(string|number)[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

</script>


<table>
  <tr>
    <th></th>
    {#each cellContents[0] as _, i}
      <th>{String.fromCharCode(65+i)}</th>
    {/each}
  </tr>
  {#each cellContents as row, i }
    <tr>
      <th>{i+1}</th>
      {#each row as cell, j }
        <Cell content={cell} onChange={(updated) => cellContents[i][j] = updated} />
      {/each}
    </tr>
  {/each}
</table>

<br>
<button on:click={()=> console.log(cellContents)}>Inspect</button>
<br>
<button on:click={()=> cellContents=[...cellContents,Array(cellContents[0].length).fill(0) ]}>+ row</button>
<button on:click={()=> cellContents=cellContents.slice(0,-1)}>- row</button>
<br>
<button on:click={()=> cellContents=cellContents.map(row => [...row, 0])}>+ column</button>
<button on:click={()=> cellContents=cellContents.map(row => row.slice(0,-1))}>- column</button>




<style>
table{
  width:100%;
  border-collapse:collapse;
}
th,td{
  color:#505050;
  font-weight:normal;
  border:1px solid #999;
  background:#fff;
  padding:0;
  margin:0;
}
</style>