import { size } from "../../../../themes"

export const colorPaletteStaticProperties = {
    $display : 'flex',
    $flexGrow : '1',
}

export const colorListStaticProperties = {
    $listStyleType : 'none',
    $alignItems : 'center',
    $maxHeight : '76.68vh',
    $paddingRight : size.gap,
}

export const colorItemStaticProperties = {
    $minHeight : `${parseFloat(size.box)/2}px`,
    $maxHeight : `${parseFloat(size.box)/2}px`,
    
    $minWidth : `${parseFloat(size.box)/2}px`,
    $maxWidth : `${parseFloat(size.box)/2}px`,
}