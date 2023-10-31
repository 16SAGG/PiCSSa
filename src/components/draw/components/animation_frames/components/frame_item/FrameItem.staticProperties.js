import { duration, paletteRGBA, size, transparency } from "../../../../../../themes"

export const frameItemStaticProperties = {
    $display : 'flex',
    $opacity : transparency.medium,
    $hoverOpacity : '1',
    $transitionDuration : duration.fast,
    $minHeight : `${parseFloat(size.box)*2}px`,
    $minWidth : `${parseFloat(size.box)*4}px`
}

export const columnsWrapperStaticProperties = {
    $display : 'flex',
    $minWidth : `${parseFloat(size.box)*2}px`,
}

export const IDContainerStaticProperties = ({
    $display = 'flex',
    $flexGrow = '1',
    $alignItems = 'center',
    $justifyContent = 'center',
    $backgroundColor = paletteRGBA().theme_1.primaryVariant,
}) =>{
    const result = {
        $display,
        $flexGrow,
        $alignItems,
        $justifyContent,
        $backgroundColor,
    }

    return result
}

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

export const contentStaticProperties = {
    $flexGrow : '1',
    $borderStyle : 'solid',
    $borderColor : paletteRGBA().theme_1.primaryVariant,
    $opacity : '1',
    $hoverOpacity : undefined,
} 