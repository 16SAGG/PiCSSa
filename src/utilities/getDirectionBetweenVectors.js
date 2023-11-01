export const getDirectionBetweenVectors = (
    a = {x : 0, y : 0},
    b = {x : 0, y : 0}
) =>{
    const direction = {x : 0, y : 0}

    const theVectorAInXIsGreaterThanVectorBInX = a.x > b.x
    const theVectorAInXIsLessThanVectorBInX = a.x < b.x
    
    if (theVectorAInXIsGreaterThanVectorBInX) direction.x = -1
    else if (theVectorAInXIsLessThanVectorBInX) direction.x = 1
    else direction.x = 0

    const theVectorAInYIsGreaterThanVectorBInY = a.y > b.y
    const theVectorAInYIsLessThanVectorBInY = a.y < b.y
    
    if (theVectorAInYIsGreaterThanVectorBInY) direction.y = -1
    else if (theVectorAInYIsLessThanVectorBInY) direction.y = 1
    else direction.y = 0

    return direction
}