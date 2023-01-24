<script lang="ts">
import Cell from './Cell.svelte';
let editing=false;
</script>


<table>
  <thead>
  <tr>
    <th></th>
    <th>A</th>
    <th>B</th>
    <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
<Cell content={1} />
<Cell content={2} />
<Cell content={3} />
    </tr>
    <tr>
      <th>2</th>
<Cell content={4} />
<Cell content={5} />
<Cell content={6} />
    </tr>
    <tr>
      <th>3</th>
<Cell content={7} />
<Cell content={8} />
<Cell content={9} />
    </tr>
  </tbody>
</table>



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