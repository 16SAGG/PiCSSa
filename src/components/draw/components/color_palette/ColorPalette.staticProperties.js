import { size } from "../../../../themes"

export const colorPaletteStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $flexGrow : '1',
}

export const colorListStaticProperties = {
    $alignItems : 'center',
    $maxHeight : '478px',
    $paddingRight : size.gap,
}

export const colorItemStaticProperties = {
    $minHeight : `${parseFloat(size.box)/2}px`,
    $maxHeight : `${parseFloat(size.box)/2}px`,
    $minWidth : `${parseFloat(size.box)/2}px`,
    $maxWidth : `${parseFloat(size.box)/2}px`,
}