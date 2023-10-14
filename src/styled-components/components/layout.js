import { template } from "clean-styled-components/src/styled-components/template" 

export const layout = ({
    $display = undefined,
    
    $flexDirection = undefined,

    $flexGrow = undefined,
    $flexShrink = undefined,

    $minHeight = undefined,
    $maxHeight = undefined,

    $minWidth = undefined,
    $maxWidth = undefined,

    $gap = undefined,

    $backgroundColor = undefined,

    $borderColor = undefined,

    $borderBottomTop = undefined,
    $borderBottomWidth = undefined,
    $borderLeftWidth = undefined,
    $borderRightWidth = undefined,

    $overflow = undefined,
}) => {
    return template({
        $display : $display,

        $flexDirection : $flexDirection,

        $flexGrow : $flexGrow,
        $flexShrink : $flexShrink,

        $minHeight : $minHeight,
        $maxHeight : $maxHeight,

        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $gap : $gap,

        $backgroundColor : $backgroundColor,

        $borderColor : $borderColor,
        $borderBottomTop : $borderBottomTop,
        $borderBottomWidth : $borderBottomWidth,
        $borderLeftWidth : $borderLeftWidth,
        $borderRightWidth : $borderRightWidth,

        $overflow : $overflow,
    })
}