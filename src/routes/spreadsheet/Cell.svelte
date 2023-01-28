<script lang="ts">
  export let onChange = (updatedContent:string|number) => {};

  let editing=false;

  const onKeyDown = (event:KeyboardEvent) =>{
    if(['Enter','Escape'].includes(event.key)){
      editing = false;
      if (event.key === 'Enter'){
        content = (event.target as HTMLInputElement).value;
        onChange(content);
      }
    }
  };

</script>

      <td on:click ={()=>editing=!editing}>
        {#if editing}
          <input 
            value={content} 
            on:click|stopPropagation ={()=>null}
            on:Keydown ={onKeyDown}
            >
    <!--    {:else}
          {content} -->
        {/if}
      </td>
