import { paletteRGBA, size, transparency } from "../../../../../../../../themes"

export const buttonsContainerStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $minWidth : `${parseFloat(size.box)/2}px`,
}

export const buttonStaticProperties = ({
    $color = undefined,
    $backgroundColor = paletteRGBA(transparency.medium).theme_1.primary,
    $flexGrow = '1',
    $minWidth = '0px',
    $minHeight = '0px',
    $opacity = '1',
}) => {
    const result = {
        $color,
        $backgroundColor,
        $flexGrow,
        $minWidth,
        $minHeight,
        $opacity,
    }
    return result
}