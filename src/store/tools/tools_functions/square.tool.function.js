import { createAuxiliaryVectors } from "../../../utilities/createAuxiliaryVectors"
import { getColorInUse } from "../../../utilities/getColorInUse"
import { getDirectionBetweenVectors } from "../../../utilities/getDirectionBetweenVectors"
import { resetPixelsStyleBackgroundColor } from "../../../utilities/resetPixelsStyleBackgroundColor"

const originPixelCoord = {
    x : -1,
    y : -1
} 

const eventType = {}

export const square = (
    event = {}, 
    toolArguments = {}
) =>{
    eventType[event.type]({
        isActive : toolArguments.pointer.isPressed, 
        overPixelCoord : toolArguments.pixelCoord,
        originPixelCoord,
        newBackgroundColor : getColorInUse(toolArguments.currentColors, toolArguments.pointer.buttonThatIsPressed)
    })
}

eventType.pointerdown = ({
    isActive = false, 
    overPixelCoord = {},
    originPixelCoord = {}, 
    newBackgroundColor = '',
}) =>{
    originPixelCoord.x = overPixelCoord.x
    originPixelCoord.y = overPixelCoord.y

    const pixel = document.getElementById(`${overPixelCoord.x}: ${overPixelCoord.y}`)
    if (isActive) pixel.style.backgroundColor = newBackgroundColor
}

eventType.pointerover = ({
    isActive = false, 
    overPixelCoord = {},
    originPixelCoord = {},
    newBackgroundColor = '',
}) =>{
    resetPixelsStyleBackgroundColor()
    if (isActive) drawSquare(originPixelCoord, overPixelCoord, newBackgroundColor)
}

const drawSquare = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
    newBackgroundColor = ''
) => {
    const direction = getDirectionBetweenVectors(originPixelCoord, overPixelCoord)
    const stringDirection = `${direction.x}: ${direction.y}`
    
    const vectors = createAuxiliaryVectors[stringDirection](originPixelCoord, overPixelCoord)
    drawLine(vectors[0], vectors[1], newBackgroundColor)
    drawLine(vectors[0], vectors[2], newBackgroundColor)
    drawLine(vectors[1], vectors[3], newBackgroundColor)
    drawLine(vectors[2], vectors[3], newBackgroundColor)
}

const drawLine = (
    vectorA = {x : 0, y : 0},
    vectorB = {x : 0, y : 0},
    newBackgroundColor = '',
) =>{
    const vectorAAtXIsEqualToVectorBAtX = vectorA.x === vectorB.x
    const iterableAxis = (vectorAAtXIsEqualToVectorBAtX) ? 'y' : 'x'

    for (let index = vectorA[iterableAxis]; index <= vectorB[iterableAxis]; index++){
        const pixel = (vectorAAtXIsEqualToVectorBAtX) ? document.getElementById(`${vectorA.x}: ${index}`) : document.getElementById(`${index}: ${vectorA.y}`)
        pixel.style.backgroundColor = newBackgroundColor
    }
}

eventType.pointerup = (empty = {}) =>{return empty}