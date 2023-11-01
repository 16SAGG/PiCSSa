export const createAuxiliaryVectors = {}

createAuxiliaryVectors['-1: -1'] = (
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

createAuxiliaryVectors['1: -1'] = (
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

createAuxiliaryVectors['-1: 1'] = (
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

createAuxiliaryVectors['1: 1'] = (
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

createAuxiliaryVectors['-1: 0'] = (
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

createAuxiliaryVectors['0: -1'] = (
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

createAuxiliaryVectors['1: 0'] = (
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

createAuxiliaryVectors['0: 1'] = (
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

createAuxiliaryVectors['0: 0'] = (
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
