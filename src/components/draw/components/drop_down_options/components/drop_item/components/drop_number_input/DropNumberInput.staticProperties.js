import { paletteRGBA, size } from "../../../../../../../../themes"

export const numberInputContainerStaticProperties = {
    $display : 'flex',

    $borderStyle : 'none',

    $minHeight : size.box,
    $minWidth : `${parseFloat(size.box)*1.5}px`,
}

export const numberDisplayerStaticProperties = {
    $display : 'flex',

    $textAlign : 'center',

    $paddingTop : '0px',
    $paddingBottom : '0px',
    $paddingLeft : '0px',
    $paddingRight : '0px',

    $flexGrow : '1',

    $alignItems : 'center',
    $justifyContent : 'center',
}

export const buttonContainerStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
}

export const buttonStaticProperties = {
    $hoverBackgroundColor : paletteRGBA().theme_1.secondary,
    $hoverColor : paletteRGBA().theme_1.onSecondary,

    $minHeight : `${parseFloat(size.box)/2}px`, 
    $minWidth : `${parseFloat(size.box)/2}px`,
}