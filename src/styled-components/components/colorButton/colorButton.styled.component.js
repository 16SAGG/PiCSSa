import { template } from "clean-styled-components/src/styled-components/template" 

import { duration, paletteRGBA, size, transparency } from "../../../themes"

import { colorButtonHover } from "./colorButton.styled.hover.component "

export const colorButton = ({
    $minHeight = `${parseFloat(size.box)/2}px`,
    $maxHeight = `${parseFloat(size.box)/2}px`,
    
    $minWidth = `${parseFloat(size.box)/2}px`,
    $maxWidth = `${parseFloat(size.box)/2}px`,

    $opacity = transparency.medium,
    $hoverOpacity = undefined,

    $backgroundColor = paletteRGBA().theme_1.onPrimary,

    $transitionDuration = duration.fast,
}) => {
    return template({
        $minHeight : $minHeight,
        $maxHeight : $maxHeight,
        
        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $opacity : $opacity,

        $backgroundColor : $backgroundColor,

        $transitionDuration : $transitionDuration,

        $hoverProperties : colorButtonHover({
            $hoverOpacity : $hoverOpacity,
        })
    })
}