export const checkBoardPattern = {};

checkBoardPattern.backgroundImage = ({$checkBoardColor = '#000'}) =>{
    return `
        linear-gradient(45deg, ${$checkBoardColor} 25%, transparent 25%), 
        linear-gradient(135deg, ${$checkBoardColor} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${$checkBoardColor} 75%),
        linear-gradient(135deg, transparent 75%, ${$checkBoardColor} 75%);
    `
}

checkBoardPattern.backgroundSize = ({$checkBoardBackgroundSize = '30px'}) =>{
    return `
        ${$checkBoardBackgroundSize} ${$checkBoardBackgroundSize};
    `
}

checkBoardPattern.backgroundPosition = ({$checkBoardBackgroundSize = '30px'}) =>{
    const floatBackgroundSize = parseFloat($checkBoardBackgroundSize);
    const halfBackgroundSize = floatBackgroundSize/2;
    const backgroundCoordinates = `${halfBackgroundSize}px`;

    return `
        0 0, ${backgroundCoordinates} 0px, ${backgroundCoordinates} -${backgroundCoordinates}, 0px ${backgroundCoordinates};
    `
}