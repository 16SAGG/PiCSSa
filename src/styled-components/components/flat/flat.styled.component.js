import { template } from "clean-styled-components/src/styled-components/template" 

import { flatHover } from "./flat.hover.styled.component"
import { flatFocus } from "./flat.focus.styled.component"

import { duration, palette, size, transparency } from "../../../themes"

export const flat = ({
    $flexGrow = undefined,

    $minWidth = size.box,

    $backgroundColor = 'transparent',
    $hoverBackgroundColor = palette.theme_1.surfaceHover,
    $focusBackgroundColor = undefined,

    $textAlign = 'center',
    $hoverTextAlign = undefined,
    $focusTextAlign = undefined,

    $color = palette.theme_1.onBackground, 

    $opacity = transparency.light,
    $hoverOpacity = '1',
    $focusOpacity = '1',

    $borderStyle = 'none',

    $outlineStyle = 'none',

    $transitionDuration = duration.fast,
}) => {
    return template({
        $flexGrow : $flexGrow,

        $minWidth : $minWidth,

        $backgroundColor : $backgroundColor,

        $color : $color,

        $textAlign : $textAlign,

        $opacity : $opacity,
        
        $borderStyle : $borderStyle,

        $outlineStyle : $outlineStyle,

        $transitionDuration : $transitionDuration,

        $hoverProperties : flatHover({
            $hoverBackgroundColor : $hoverBackgroundColor,

            $hoverTextAlign : $hoverTextAlign,

            $hoverOpacity : $hoverOpacity,
        }),

        $focusProperties : flatFocus({
            $focusBackgroundColor : $focusBackgroundColor,
            $focusOpacity : $focusOpacity,
            $focusTextAlign : $focusTextAlign,
        })
    })
}