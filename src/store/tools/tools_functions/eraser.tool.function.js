const eventType = {}

export const eraser = (
    event = {}, 
    toolArguments = {}
) =>{

    eventType[event.type]({
        isActive : toolArguments.pointer.isPressed, 
        pixelCoord : toolArguments.pixelCoord,
        newBackgroundColor : 'transparent'
    })
}

eventType.pointerdown = eventType.pointerover = ({
    isActive = false, 
    pixelCoord = {},  
    newBackgroundColor = 'transparent',
}) =>{
    const pixel = document.getElementById(`${pixelCoord.x}: ${pixelCoord.y}`)
    if (isActive) pixel.style.backgroundColor = newBackgroundColor
}

eventType.pointerup = (empty = {}) =>{return empty}