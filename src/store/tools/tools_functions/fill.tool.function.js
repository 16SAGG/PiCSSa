import { getColorInUse } from "../../../utilities/getColorInUse"
import { setFrameInfoInPixelsStyle } from "../../../utilities/setFrameInfoInPixelsStyle"

const eventType = {}

export const fill = (
    event = {}, 
    toolArguments = {}
) =>{

    eventType[event.type]({
        isActive : toolArguments.pointer.isPressed, 
        pixelCoord : toolArguments.pixelCoord,
        colorToChange : toolArguments.backgroundColor,
        newBackgroundColor : getColorInUse(toolArguments.currentColors, toolArguments.pointer.buttonThatIsPressed),
        frameInfo : toolArguments.frameInfo
    })
}

eventType.pointerdown = ({
    isActive = false, 
    pixelCoord = {},
    colorToChange = '',
    newBackgroundColor = '',
    frameInfo = [],
}) =>{
    setFrameInfoInPixelsStyle(frameInfo)

    if (isActive) propagateColor(pixelCoord, colorToChange, newBackgroundColor)
}

export const propagateColor = (
    pixelCoord = {},
    colorToChange = '',
    newBackgroundColor = '',
) =>{
    const pixel = document.getElementById(`${pixelCoord.x}: ${pixelCoord.y}`)

    const pixelExist = pixel != null
    if (pixelExist) {
        const pixelCurrentBackgroundColor = pixel.style.backgroundColor
        const pixelCurrentBackgroundColorIsEqualToTheColorToChange = pixelCurrentBackgroundColor === colorToChange
        const pixelCurrentBackgroundColorIsNotEqualToTheNewBackgroundColor = pixelCurrentBackgroundColor != newBackgroundColor
        if(
            pixelCurrentBackgroundColorIsEqualToTheColorToChange && 
            pixelCurrentBackgroundColorIsNotEqualToTheNewBackgroundColor
        ) {
            pixel.style.backgroundColor = newBackgroundColor

            const leftPixelCoord = {x : pixelCoord.x - 1, y : pixelCoord.y}
            const rightPixelCoord = {x : pixelCoord.x + 1, y : pixelCoord.y}
            const upPixelCoord = {x : pixelCoord.x, y : pixelCoord.y - 1}
            const downPixelCoord = {x : pixelCoord.x, y : pixelCoord.y + 1}

            propagateColor(leftPixelCoord, colorToChange, newBackgroundColor)
            propagateColor(rightPixelCoord, colorToChange, newBackgroundColor)
            propagateColor(upPixelCoord, colorToChange, newBackgroundColor)
            propagateColor(downPixelCoord, colorToChange, newBackgroundColor)
        }
    }
}

eventType.pointerup = eventType.pointerover = (empty = {}) =>{return empty}