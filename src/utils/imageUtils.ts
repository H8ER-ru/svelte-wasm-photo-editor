
export const imageToWasmFormat = (image: string): string => {
    return  image.replace(
        /^data:image\/(png|jpg|jpeg);base64,/,
        ''
    )
}

export const downloadCurrentImage = (image:string):void => {
    const a = document.createElement("a");
    a.href = image;
    a.download = "image.png";
    a.click();
}