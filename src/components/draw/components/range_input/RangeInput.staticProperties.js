import { duration, size, transparency } from "../../../../themes"

export const rangeContainerStaticProperties = ({
    $display = 'flex',
    $gap = '0',
    $flexGrow = '1',
    $alignItems = 'center',
    $opacity = transparency.medium,
    $hoverOpacity = '1',
    $transitionDuration = duration.fast,
})=>{
    return {
        $display,
        $gap,
        $flexGrow,
        $alignItems,
        $opacity,
        $hoverOpacity,
        $transitionDuration
    }
}

export const rangeInputStaticProperties = {
    $flexGrow : '1',
    $opacity : '1',
}

export const valueCounterStaticProperties = ({
    $textAlign = 'center',
    $minWidth = size.box,
}) =>{
    return {
        $textAlign,
        $minWidth,
    }
}