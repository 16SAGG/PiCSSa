import { template } from "clean-styled-components/src/styled-components/template" 
import { layoutHover } from "./layout.styled.hover.component"

export const layout = ({
    $display = undefined,

    $alignContent = undefined,

    $position = undefined,
    
    $flexDirection = undefined,

    $flexGrow = undefined,
    $flexShrink = undefined,

    $listStyleType = undefined,

    $gridTemplateColumns = undefined,
    $gridTemplateRows = undefined,

    $alignItems = undefined,
    $justifyContent = undefined,

    $opacity = undefined,
    $hoverOpacity = undefined,

    $width = undefined,
    $minHeight = undefined,
    $maxHeight = undefined,

    $height = undefined,
    $minWidth = undefined,
    $maxWidth = undefined,

    $paddingTop = undefined,
    $paddingBottom  = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,

    $marginTop = undefined,
    $marginBottom = undefined,
    $marginLeft = undefined,
    $marginRight = undefined,

    $gap = undefined,

    $backgroundColor = undefined,

    $color = undefined,

    $borderStyle = undefined,
    $borderColor = undefined,
    $borderTopWidth = undefined,
    $borderBottomWidth = undefined,
    $borderLeftWidth = undefined,
    $borderRightWidth = undefined,

    $transitionDuration = undefined,

    $overflow = undefined,

    $zIndex = undefined,
}) => {
    return template({
        $display,

        $alignContent,

        $position,

        $flexDirection,

        $flexGrow,
        $flexShrink,

        $listStyleType,

        $gridTemplateColumns,
        $gridTemplateRows,

        $alignItems,
        $justifyContent,

        $opacity,

        $height,
        $minHeight,
        $maxHeight,

        $width,
        $minWidth,
        $maxWidth,

        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        $paddingRight,

        $marginTop,
        $marginBottom,
        $marginLeft,
        $marginRight,

        $gap,

        $backgroundColor,

        $color,

        $borderStyle,
        $borderColor,
        $borderTopWidth,
        $borderBottomWidth,
        $borderLeftWidth,
        $borderRightWidth,

        $transitionDuration,

        $overflow,

        $hoverProperties : layoutHover ({
            $hoverOpacity,
        }),

        $zIndex,
    })
}