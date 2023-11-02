export const createSquareCorners = {}

createSquareCorners['-1: -1'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        overPixelCoord,
        {x : originPixelCoord.x, y : overPixelCoord.y},
        {x : overPixelCoord.x, y : originPixelCoord.y},
        originPixelCoord,
    ]
}

createSquareCorners['1: -1'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        {x : originPixelCoord.x, y : overPixelCoord.y},
        overPixelCoord,
        originPixelCoord,
        {x : overPixelCoord.x, y : originPixelCoord.y},
    ]
}

createSquareCorners['-1: 1'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        {x : overPixelCoord.x, y : originPixelCoord.y},
        originPixelCoord,
        overPixelCoord,
        {x : originPixelCoord.x, y : overPixelCoord.y},
    ]
}

createSquareCorners['1: 1'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        originPixelCoord,
        {x : overPixelCoord.x, y : originPixelCoord.y},
        {x : originPixelCoord.x, y : overPixelCoord.y},
        overPixelCoord,
    ]
}

createSquareCorners['-1: 0'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        overPixelCoord,
        originPixelCoord,
        overPixelCoord,
        originPixelCoord,
    ]
}

createSquareCorners['0: -1'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        overPixelCoord,
        overPixelCoord,
        originPixelCoord,
        originPixelCoord,
    ]
}

createSquareCorners['1: 0'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        originPixelCoord,
        overPixelCoord,
        originPixelCoord,
        overPixelCoord,
    ]
}

createSquareCorners['0: 1'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        originPixelCoord,
        originPixelCoord,
        overPixelCoord,
        overPixelCoord,
    ]
}

createSquareCorners['0: 0'] = (
    originPixelCoord = {}, 
    overPixelCoord = {}, 
) =>{
    return [
        originPixelCoord,
        originPixelCoord,
        overPixelCoord,
        overPixelCoord,
    ]
}
