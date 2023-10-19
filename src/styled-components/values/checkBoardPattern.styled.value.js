import { paletteRGBA, size } from "../../themes";

export const checkBoardPattern = {};

checkBoardPattern.backgroundImage = ({$checkBoardColor = paletteRGBA().theme_1.background}) =>{
    return `
        linear-gradient(45deg, ${$checkBoardColor} 25%, transparent 25%), 
        linear-gradient(135deg, ${$checkBoardColor} 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, ${$checkBoardColor} 75%),
        linear-gradient(135deg, transparent 75%, ${$checkBoardColor} 75%);
    `
}

checkBoardPattern.backgroundSize = ({$checkBoardBackgroundSize = `${parseFloat(size.box)/4}px`}) =>{
    return `
        ${$checkBoardBackgroundSize} ${$checkBoardBackgroundSize};
    `
}

checkBoardPattern.backgroundPosition = ({$checkBoardBackgroundSize = `${parseFloat(size.box)/4}px`})=>{
    const floatBackgroundSize = parseFloat($checkBoardBackgroundSize);
    const halfBackgroundSize = floatBackgroundSize/2;
    const backgroundCoordinates = `${halfBackgroundSize}px`;

    return `
        0 0, ${backgroundCoordinates} 0px, ${backgroundCoordinates} -${backgroundCoordinates}, 0px ${backgroundCoordinates};
    `
}