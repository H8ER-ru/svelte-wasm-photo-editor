import { writable} from 'svelte/store';
import init, {image_function as imageFunctionWasm} from 'wasm'
import {imageToWasmFormat} from "../utils/imageUtils";

type functionNames = 'blur' | 'grayscale' | 'rotate90'| 'rotate180' | 'flip_horizontal' | 'flip_vertical'

const initState: ImageStoreInterface = {
    currentImage: '',
    redoList: [],
    undoList: [],
}

interface ImageStoreInterface {
    currentImage: string
    redoList: string[]
    undoList: string[]
}

export const imageStore = writable<ImageStoreInterface>(initState)

export const resetAll = ():void => {
    imageStore.set(initState)
}

export const loadImages = (img: string):void => {
    imageStore.update(prevValue => {
        return {
            ...prevValue,
            currentImage: img
        }
    })
}

export const imageFunction = async (functionName: functionNames) => {
    await init()
    imageStore.update((state) => {
        const newImage = imageFunctionWasm(imageToWasmFormat(state.currentImage), functionName)
        return {
            ...state,
            currentImage: newImage,
            undoList: [...state.undoList, newImage]
        }
    })
}