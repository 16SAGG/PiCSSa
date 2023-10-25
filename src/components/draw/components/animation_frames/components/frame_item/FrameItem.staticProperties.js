import { duration, paletteRGBA, size, transparency } from "../../../../../../themes"

export const frameItemStaticProperties = {
    $display : 'flex',
    $opacity : transparency.medium,
    $hoverOpacity : '1',
    $transitionDuration : duration.fast,
    $minHeight : `${parseFloat(size.box)*2}px`,
    $minWidth : `${parseFloat(size.box)*4}px`
}

export const frameOptionsStaticProperties = {
    $display : 'flex',
    $minWidth : `${parseFloat(size.box)*2}px`,
    $backgroundColor : paletteRGBA().theme_1.primaryVariant,
}

export const frameNumberContainerStaticProperties = {
    $display : 'flex',
    $flexGrow : '1',
    $alignItems : 'center',
    $justifyContent : 'center',
}

export const frameButtonsContainerStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $minWidth : `${parseFloat(size.box)/2}px`,
}

export const frameButtonStaticProperties = {
    $backgroundColor : paletteRGBA().theme_1.primary,
    $flexGrow : '1',
    $minWidth : '0px',
    $minHeight : '0px',
}

export const frameContentStaticProperties = {
    $flexGrow : '1',
    $borderStyle : 'solid',
    $borderColor : paletteRGBA().theme_1.primaryVariant,
    $opacity : '1'
}