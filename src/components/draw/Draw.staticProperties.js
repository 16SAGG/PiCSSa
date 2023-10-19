import { border, paletteRGBA, size, transparency } from "../../themes"


export const drawStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $minHeight : '100vh',
    $overflow : 'hidden',
    $backgroundColor : paletteRGBA().theme_1.background,
}

export const headerStaticProperties = {
    $display : 'flex',
    $minHeight : size.box,
    $backgroundColor : paletteRGBA().theme_1.primary,
    $borderColor : paletteRGBA(transparency.dark).theme_1.onPrimary,
    $borderStyle : 'solid',
    $borderTopWidth : '0px',
    $borderBottomWidth : border.width.small,
    $borderLeftWidth : '0px',
    $borderRightWidth : '0px',
}

export const mainStaticProperties = {
    $display : 'flex',
    $flexGrow : 1,
    $gap : size.gutter,
}

export const leftColumnStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $backgroundColor : paletteRGBA().theme_1.primary,
    $minWidth : `${parseFloat(size.box) * 2 + parseFloat(size.gap)}px` ,
    $borderColor : paletteRGBA(transparency.dark).theme_1.onPrimary,
    $borderStyle : 'solid',
    $borderTopWidth : '0px',
    $borderBottomWidth : '0px',
    $borderLeftWidth : '0px',
    $borderRightWidth : border.width.small,
}

export const leftColumnTopStaticProperties = {
    $display : 'flex',
    $flexGrow : '1'
}

export const leftColumnBottomStaticProperties = {
    $display : 'flex',
    $minHeight : `${parseFloat(size.box) * 2 + parseFloat(size.gap)}px`,
    $alignItems : 'center',
    $justifyContent : 'center',
}

export const rightColumnStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $backgroundColor : paletteRGBA().theme_1.primary,
    $minWidth : `${parseFloat(size.box) * 5}px`,
    $borderColor : paletteRGBA(transparency.dark).theme_1.onPrimary,
    $borderStyle : 'solid',
    $borderTopWidth : '0px',
    $borderBottomWidth : '0px',
    $borderLeftWidth : border.width.small,
    $borderRightWidth : '0px',
}
    
export const centerColumnStaticProperties = {
    $display : 'flex',
    $flexGrow : 1,
}