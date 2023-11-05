export const convertPixelArtAnimationToCSS = (
    frames = [], 
    name = 'name',
    pixelSize = 0,
    duration = 1,
) =>{
    let CSSCode = 
`.${name} {
    position : relative;
    top : -${pixelSize}px;
    left : -${pixelSize}px;
    animation : ${name} ${duration}s infinite;
    -webkit-animation : ${name} ${duration}s infinite;
    -moz-animation : ${name} ${duration}s infinite;
    -o-animation : ${name} ${duration}s infinite;
}

@keyframes ${name} {
`

    const keyframePercentage = 100/frames.length
    let percentageCount = 0

    frames.map((frame, frameIndex) => {
        const isTheFirstFrame = frameIndex === 0
        const isTheLastFrame = frameIndex === frames.length - 1
        CSSCode += 
        `   ${(isTheFirstFrame) ? 0 : percentageCount + 0.01}%, ${(isTheLastFrame) ? 100 : percentageCount + keyframePercentage}% {
`
        
        CSSCode += convertFrameToCSS(frame, pixelSize)

        percentageCount += keyframePercentage
    })
    CSSCode += `}`

    return CSSCode
}

export const convertPixelArtSingleToCSS = (
    frame = [], 
    name = 'name',
    pixelSize = 0,
) =>{
    let CSSCode = 
`.${name} {
    position : relative;
    top : -${pixelSize}px;
    left : -${pixelSize}px;
`

    CSSCode += convertFrameToCSS(frame, pixelSize)

    return CSSCode
}

const convertFrameToCSS = (frame, pixelSize) =>{
    let CSSCode = `   box-shadow : `

    frame.map((row, indexY) => {
        row.map((pixelColor, indexX) => {
            const lastRow =  indexY === frame.length - 1
            const lastColumn = indexX === row.length - 1
            CSSCode += `${(indexX + 1)*pixelSize}px ${(indexY + 1)*pixelSize}px 0 0 ${pixelColor}`
            CSSCode += (lastRow && lastColumn) ? ';' : ','
        })
    })

    CSSCode += `
    height : ${pixelSize}px;
    width : ${pixelSize}px;
}
`

    return CSSCode
}