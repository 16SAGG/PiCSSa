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
