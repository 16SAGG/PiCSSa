import { getDirectionBetweenVectors } from "../../../utilities/getDirectionBetweenVectors"
import { moveTowards } from "../../../utilities/moveTowards"
import { setFrameInfoInPixelsStyle } from "../../../utilities/setFrameInfoInPixelsStyle"

const originPixelCoord = {
    x : -1,
    y : -1
} 

const eventType = {}

export const hand = (
    event = {}, 
    toolArguments = {}
) =>{

    eventType[event.type]({
        isActive : toolArguments.pointer.isPressed,
        overPixelCoord : toolArguments.pixelCoord,
        originPixelCoord,
        frameInfo : toolArguments.frameInfo,
        canvasDimensions : toolArguments.canvasDimensions
    })
}

eventType.pointerdown = ({
    isActive = false,
    overPixelCoord = {},
    originPixelCoord,
    frameInfo = [],
    canvasDimensions = {}
}) =>{
    originPixelCoord.x = overPixelCoord.x
    originPixelCoord.y = overPixelCoord.y

    if (isActive) setFrameInfoInPixelsStyle(frameInfo)

    return canvasDimensions
}

eventType.pointerover = ({
    isActive = false,
    overPixelCoord = {},
    originPixelCoord,
    frameInfo = [],
    canvasDimensions = {}
}) =>{
    const direction = getDirectionBetweenVectors(originPixelCoord, overPixelCoord)

    originPixelCoord.x = overPixelCoord.x
    originPixelCoord.y = overPixelCoord.y

    if (isActive) movePixels(direction, canvasDimensions)

    return frameInfo
}

const movePixels = (
    direction = {},
    canvasDimensions = {},
) => {
    const movingTowardsThisDirectionIsPossible = moveTowards[`${direction.x}: ${direction.y}`] != null
    if (movingTowardsThisDirectionIsPossible) moveTowards[`${direction.x}: ${direction.y}`] (
        canvasDimensions.columnsCount, 
        canvasDimensions.rowsCount
    )
}

eventType.pointerup = (empty = {}) =>{return empty}
