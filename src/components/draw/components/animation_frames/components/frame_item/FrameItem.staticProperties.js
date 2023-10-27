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
    $backgroundColor : paletteRGBA().theme_1.primaryVariant,
}

export const IDContainerStaticProperties = {
    $display : 'flex',
    $flexGrow : '1',
    $alignItems : 'center',
    $justifyContent : 'center',
}

export const buttonsContainerStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $minWidth : `${parseFloat(size.box)/2}px`,
}

export const buttonStaticProperties = {
    $backgroundColor : paletteRGBA().theme_1.primary,
    $flexGrow : '1',
    $minWidth : '0px',
    $minHeight : '0px',
}

export const contentStaticProperties = ({
    $flexGrow = '1',
    $borderStyle = 'solid',
    $borderColor = paletteRGBA().theme_1.primaryVariant,
    $opacity = '1',
    $hoverOpacity = undefined,
}) =>{
    const result = {
        $flexGrow : $flexGrow,
        $borderStyle : $borderStyle,
        $borderColor : $borderColor,
        $opacity : $opacity,
        $hoverOpacity : $hoverOpacity,
    }

    return result
}