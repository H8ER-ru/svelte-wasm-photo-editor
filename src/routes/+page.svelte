<script lang="ts">
  import { onMount } from 'svelte'
  import init, { grayscale, blur } from "wasm";

  onMount(async () => {
    await init()
  })

  let imgBase64Initial = null;

  let imgSrc = null

  const loadImgAndGrayScale = (e) => {
    const fileReader = new FileReader()

    fileReader.onload = (result) => {
      imgBase64Initial = fileReader.result?.replace(
        /^data:image\/(png|jpg|jpeg);base64,/,
        ''
      )
      imgSrc = fileReader.result
    }

    fileReader.readAsDataURL(e.target.files[0])
  }

  const grayscaleHandler = e => {
    e.preventDefault()
    imgSrc = grayscale(imgBase64Initial)
  }

  const blurHandler = e => {
    e.preventDefault()
    imgSrc = blur(imgBase64Initial)
  }

</script>

<div class="main">

  {#if imgSrc}
    <img src={imgSrc} alt="">
  {/if}

  <input type="file" on:input={loadImgAndGrayScale} accept=".png">
  <button on:click={grayscaleHandler}>grayscale</button>
  <button on:click={blurHandler}>blur</button>

</div>


<style>
*, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}
.main {
    padding: 20px;
}
</style>
