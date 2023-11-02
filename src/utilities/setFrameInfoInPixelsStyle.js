export const setFrameInfoInPixelsStyle = (frameInfo) => {
    for (let indexY = 0; indexY < frameInfo.length; indexY++) {
        for (let indexX = 0; indexX < frameInfo[indexY].length; indexX++) {
            const pixel = document.getElementById(`${indexX}: ${indexY}`)
            pixel.style.backgroundColor = frameInfo[indexY][indexX]
        }
    }
}