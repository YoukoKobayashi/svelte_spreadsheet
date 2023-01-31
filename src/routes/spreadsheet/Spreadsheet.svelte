<script lang="ts">
import Cell from './Cell.svelte';
import {onMount} from 'svelte'

let cellContents:(string|number)[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

// 考え方
// const data = JSON.stringify(cellContents);  //JSON文字列に変換（=シリアライズする）
// console.log(data);
// localStorage.setItem('cellContents',data);  //シリアライズしたJSON文字列'data'を'cellContents'に保存する

const persist = () =>{
  const data = JSON.stringify(cellContents);
  window.localStorage.setItem('cells',data);
}

onMount(()=>{
  const persistedData = window.localStorage.getItem('cells');
  if (persistedData){     //'cells'が既に保存されていた場合のみ
    cellContents = JSON.parse(persistedData);   //JSNO文字列をperseしてオブジェクトに変換し、'cellContents'に代入する
  }
});

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
<br>
<button on:click={persist}>Save</button>




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