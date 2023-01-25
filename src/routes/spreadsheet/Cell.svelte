<script lang="ts">
  export let content:String|number = '';
  let editing=false;

  const onKeyDown = (event:any) =>{
    if(['Enter','Escape'].includes(event.key)){
      editing = false;
      if (event.key === 'Enter'){
        content = event.target.value;
      }
    }
  };

</script>

<!--<td>{content}</td>-->
      <td on:click ={()=>editing=!editing}>
        {#if editing}
          <input 
            value={content} 
            on:click|stopPropagation ={()=>null}
            on:Keydown ={onKeyDown}
            >
        {:else}
          {content}
        {/if}
      </td>
