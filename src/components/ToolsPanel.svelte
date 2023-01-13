<script lang="ts">

    import AppToolButton from "./UI/AppToolButton.svelte";
    import { downloadCurrentImage } from "../utils/imageUtils";
    import { imageStore } from "../store/ImageStore";

    interface tool {
        label: string
        func: string
    }
    let image = null

    imageStore.subscribe(newValue => {
        image = newValue.currentImage
    })

    const toolsArray: tool[] = [
        {label: 'Повернуть на 90', func: 'rotate90'},
        {label: 'Повернуть на 180', func: 'rotate180'},
        {label: 'Размытие', func: 'blur'},
        {label: 'Черно-белое', func: 'grayscale'},
        {label: 'Развернуть вертикально', func: 'flip_vertical'},
        {label: 'Развернуть горизонтально', func: 'flip_horizontal'},
    ]

    const clickHandler = (e) => {
        e.preventDefault()
        downloadCurrentImage(image)
    }

</script>


<div class="tool-panel" role="listitem" aria-label="Панель инструментов">
    {#each toolsArray as tool}
        <AppToolButton text={tool.label} handler={tool.func}/>
    {/each}
    <button class="tool-panel__download" on:click={clickHandler} aria-label="Скачать картинку">
        Скачать (.png)
    </button>
</div>


<style lang="scss">
.tool-panel {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    &__download {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
        background: blue;
        color: white;
        padding: 5px;
        margin-left: auto;
    }
}
</style>

