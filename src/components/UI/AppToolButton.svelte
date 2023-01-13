<script>
import {imageFunction} from "../../store/ImageStore.ts";

export let text
export let handler

const clickHandler = async e => {
    e.preventDefault()
    await imageFunction(handler)
}

</script>

<button class="app-tool-button" on:click={clickHandler}>{text}</button>

<style lang="scss">
.app-tool-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  background: white;
  padding: 5px;
  transition: opacity .3s linear;
  &:hover {
    opacity: 0.9;
  }
}
</style>