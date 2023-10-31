import { getColorInUse } from "../../../utilities/getColorInUse"

const eventType = {}

export const pencil = (
    event = {}, 
    toolArguments = {}
) =>{
    eventType[event.type]({
        isActive : toolArguments.pointer.isPressed, 
        pixelCoord : toolArguments.pixelCoord,
        newBackgroundColor : getColorInUse(toolArguments.currentColors, toolArguments.pointer.buttonThatIsPressed)
    })
}

eventType.pointerdown = eventType.pointerover = ({
    isActive = false, 
    pixelCoord = {}, 
    newBackgroundColor = '',
}) =>{
    const pixel = document.getElementById(`${pixelCoord.x}: ${pixelCoord.y}`)
    if (isActive) pixel.style.backgroundColor = newBackgroundColor
}

eventType.pointerup = (empty = {}) =>{return empty}