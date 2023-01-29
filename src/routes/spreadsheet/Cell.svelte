<script lang="ts">
  export let onChange: (updatedContent:string|number) => void;  //型定義のみで初期値を入れないほうがよいのではないか？とのことでこの形。voidは返り値の型を定義した部分。

  export let content:string|number;

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

  const evaluateFormula=(exp:string) =>{
    const sanitized = exp.slice(1).replace(/[^\=\+\-\*%/0-9]/g,'');
    return eval(sanitized);
  };
</script>

      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <td on:click ={()=>editing=!editing}>
        {#if editing}
          <input
            value={content} 
            on:click|stopPropagation={() => null}
            on:keydown ={onKeyDown}
            >
        {:else}
          {#if content.toString().startsWith('=')}
            {evaluateFormula(content.toString())}
          {:else}
            {content} 
          {/if}
        {/if}
      </td>


