<script lang="ts">
  import '../app.css'
  import { fade } from 'svelte/transition';
  import {imageStore} from "../store/ImageStore";
  import ToolsPanel from "../components/ToolsPanel.svelte";
  import InitialLoad from "../components/InitialLoad.svelte";

  let imageToShow = ''

  imageStore.subscribe(newValue => {
    imageToShow = newValue.currentImage
  })

</script>

<div class="main">

  {#if imageToShow}
    <div transition:fade class="main__wrapper">
      <ToolsPanel/>
      <img class="main__img" src={imageToShow} alt="">
    </div>
  {/if}

  {#if !imageToShow}
    <InitialLoad/>
  {/if}

</div>


<style lang="scss">
.main {
  padding: 20px;
  background: #828282;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__img {
    max-width: 800px;
    max-height: 70vh;
    display: block;
    margin: auto;
  }
}
</style>
