import { duration, size, transparency } from "../../../../../../themes"

export const previewerControlsStaticProperties = {
    $display : 'flex',
    $minHeight : `${parseFloat(size.box)*1}px`,
    $gap : size.gap,
}

export const rangeFPSStaticProperties = {
    $display : 'flex',
    $flexGrow : '1',
    $alignItems : 'center',
    $opacity : transparency.medium,
    $hoverOpacity : '1',
    $transitionDuration : duration.fast,
}

export const rangeFPSInputStaticProperties = {
    $flexGrow : '1',
    $opacity : '1',
}

export const FPSCounterStaticProperties = {
    $textAlign : 'center',
    $minWidth : size.box,
}