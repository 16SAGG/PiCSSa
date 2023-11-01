export const resetPixelsStyleBackgroundColor = () =>{
    const pixels = document.getElementsByClassName('pixel')

    for (let p = 0; p < pixels.length; p++){
        pixels[p].style.backgroundColor = ''
    }
}