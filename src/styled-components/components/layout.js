import { template } from "clean-styled-components/src/styled-components/template" 

export const layout = ({
    $display = undefined,
    
    $flexDirection = undefined,

    $flexGrow = undefined,
    $flexShrink = undefined,

    $gridTemplateColumns = undefined,
    $gridTemplateRows = undefined,

    $alignItems = undefined,
    $justifyContent = undefined,

    $minHeight = undefined,
    $maxHeight = undefined,

    $minWidth = undefined,
    $maxWidth = undefined,

    $paddingTop = undefined,
    $paddingBottom  = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,

    $gap = undefined,

    $backgroundColor = undefined,

    $borderStyle = undefined,
    $borderColor = undefined,
    $borderTopWidth = undefined,
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

        $gridTemplateColumns : $gridTemplateColumns,
        $gridTemplateRows : $gridTemplateRows,

        $alignItems : $alignItems,
        $justifyContent : $justifyContent,

        $minHeight : $minHeight,
        $maxHeight : $maxHeight,

        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $paddingTop : $paddingTop,
        $paddingBottom : $paddingBottom,
        $paddingLeft : $paddingLeft,
        $paddingRight : $paddingRight,

        $gap : $gap,

        $backgroundColor : $backgroundColor,

        $borderStyle : $borderStyle,
        $borderColor : $borderColor,
        $borderTopWidth : $borderTopWidth,
        $borderBottomWidth : $borderBottomWidth,
        $borderLeftWidth : $borderLeftWidth,
        $borderRightWidth : $borderRightWidth,

        $overflow : $overflow,
    })
}