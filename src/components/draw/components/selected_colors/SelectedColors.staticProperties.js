import { paletteRGBA } from "../../../../themes"

export const selectedColorsStaticProperties = {
    $display : 'grid',
    $width : '65%',
    $height : '65%',
    $gridTemplateColumns : '33.3333% 33.3333% 33.3333%',
    $gridTemplateRows : '33.3333% 33.3333% 33.3333%',
}

export const primaryColorContainerStaticProperties = {
    $borderStyle : 'solid',
    $gridColumn : '1 / span 2',
    $gridRow : '1 / span 2',
    $zIndex : '1',
}

export const secondaryColorContainerStaticProperties = {
    $borderStyle : 'solid',
    $gridColumn : '2 / span 3',
    $gridRow : '2 / span 3',
}

export const colorRectangleStaticProperties = ({
    $backgroundColor = 'transparent',
    $flexGrow = '1',
}) => {
    const result = {
        $backgroundColor : $backgroundColor,
        $flexGrow : $flexGrow,
    }

    return result;
}