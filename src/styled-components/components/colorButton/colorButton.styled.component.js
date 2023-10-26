import { template } from "clean-styled-components/src/styled-components/template" 

import { duration, paletteRGBA, size, transparency } from "../../../themes"

import { colorButtonHover } from "./colorButton.styled.hover.component "

export const colorButton = ({
    $minHeight = undefined,
    $maxHeight = undefined,
    
    $minWidth =  undefined,
    $maxWidth =  undefined,

    $borderStyle = 'none',

    $backgroundColor = paletteRGBA().theme_1.onPrimary,
    $hoverBackgroundColor = ($backgroundColor === 'transparent') ? '#fff' : undefined,

    $opacity = transparency.medium,
    $hoverOpacity = ($backgroundColor === 'transparent') ? transparency.medium : undefined,

    $transitionDuration = undefined,
}) => {
    return template({
        $minHeight : $minHeight,
        $maxHeight : $maxHeight,
        
        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $opacity : $opacity,

        $borderStyle : $borderStyle,

        $backgroundColor : $backgroundColor,

        $transitionDuration : $transitionDuration,

        $hoverProperties : colorButtonHover({
            $hoverBackgroundColor : $hoverBackgroundColor,
            $hoverOpacity : $hoverOpacity,
        })
    })
}