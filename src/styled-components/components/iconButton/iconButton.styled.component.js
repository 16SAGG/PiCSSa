import { template } from "clean-styled-components/src/styled-components/template" 

import { duration, paletteRGBA, size, transparency } from "../../../themes"
import { iconButtonHover } from "./iconButton.styled.hover.component"

export const iconButton = ({
    $flexGrow = undefined,

    $minHeight = size.box,
    $maxHeight = undefined,
    
    $minWidth = size.box,
    $maxWidth = undefined,

    $paddingTop = undefined,
    $paddingBottom = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,

    $opacity = transparency.medium,
    $hoverOpacity = undefined,

    $backgroundColor = 'transparent',
    $hoverBackgroundColor = undefined,

    $color = paletteRGBA().theme_1.onPrimary,

    $borderStyle = 'none',

    $transitionDuration = duration.fast,
}) => {
    return template({
        $flexGrow : $flexGrow,

        $minHeight : $minHeight,
        $maxHeight : $maxHeight,
        
        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $paddingTop : $paddingTop,
        $paddingBottom : $paddingBottom,
        $paddingLeft : $paddingLeft,
        $paddingRight : $paddingRight,

        $opacity : $opacity,

        $backgroundColor : $backgroundColor,

        $color : $color,

        $borderStyle : $borderStyle,

        $transitionDuration : $transitionDuration,

        $hoverProperties : iconButtonHover({
            $hoverOpacity : $hoverOpacity,

            $hoverBackgroundColor : $hoverBackgroundColor
        })
    })
}