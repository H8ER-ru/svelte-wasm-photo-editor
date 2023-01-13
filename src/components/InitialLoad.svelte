<script lang="ts">

  import { loadImages } from "../store/ImageStore.js";

  let inputElement = null

  const loadImg = (e) => {
    const fileReader = new FileReader()

    fileReader.onload = () => {
      loadImages(fileReader.result as string)
    }
    fileReader.readAsDataURL(e.target.files[0])
  }

  const clickHandler = (e) => {
    e.preventDefault()
    inputElement.click()
  }

</script>



<div class="start-load">
  <input type="file" on:input={loadImg} accept=".png" bind:this={inputElement}>
  <button class="start-load__button" on:click={clickHandler}>
    Загрузить файл (.png)
  </button>
</div>


<style lang="scss">
.start-load {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  input {
    display: none;
  }
  &__button {
    padding: 20px;
    color: white;
    font-size: 30px;
    line-height: 1.1;
    border-radius: 10px;
    border: 1px solid blue;
  }
}
</style>