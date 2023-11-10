import { template } from "clean-styled-components/src/styled-components/template" 

import { duration, paletteRGBA, size, transparency } from "../../../themes"
import { iconButtonHover } from "./iconButton.styled.hover.component"

export const iconButton = ({
    $display = undefined,
    $alignItems = undefined,

    $flexGrow = undefined,

    $textAlign = undefined,

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
    $hoverColor = undefined,

    $borderStyle = 'none',

    $transitionDuration = duration.fast,
}) => {
    return template({
        $display,
        $alignItems,

        $flexGrow,

        $textAlign,

        $minHeight,
        $maxHeight,
        
        $minWidth,
        $maxWidth,

        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        $paddingRight,

        $opacity,

        $backgroundColor,

        $color,

        $borderStyle,

        $transitionDuration,

        $hoverProperties : iconButtonHover({
            $hoverOpacity,

            $hoverBackgroundColor,
            $hoverColor 
        })
    })
}