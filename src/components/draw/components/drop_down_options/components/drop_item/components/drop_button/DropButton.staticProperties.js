import { paletteRGBA, size } from "../../../../../../../../themes"

export const buttonStaticProperties = {
    $display : 'flex',
    $alignItems : 'center',
    $textAlign : 'left',
    $minWidth : `${parseFloat(size.box)*3}px`,
    $minHeight : `${parseFloat(size.box)/2}px`,
    $paddingLeft : `${parseFloat(size.box)/4}px`,
    $hoverBackgroundColor : paletteRGBA().theme_1.secondary,
    $hoverColor : paletteRGBA().theme_1.onSecondary,
}

export const textStaticProperties = {
    $flexGrow : 1,
}

export const iconStaticProperties = {
    $minWidth : `${parseFloat(size.box)/2}px`
}