import { duration, paletteRGBA, size, transparency } from "../../../../../../themes"

export const frameItemStaticProperties = {
    $display : 'flex',
    $opacity : transparency.medium,
    $hoverOpacity : '1',
    $transitionDuration : duration.fast,
    $minHeight : `${parseFloat(size.box)*2}px`,
    $minWidth : `${parseFloat(size.box)*4}px`
}

export const itemNumberStaticProperties = {
    $minWidth : `${parseFloat(size.box)*2}px`,
    $backgroundColor : paletteRGBA().theme_1.primaryVariant,
}

export const frameContentStaticProperties = {
    $flexGrow : '1',
    $borderStyle : 'solid',
    $borderColor : paletteRGBA().theme_1.primaryVariant,
    $opacity : '1'
}