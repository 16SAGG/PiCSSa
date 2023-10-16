import { template } from "clean-styled-components/src/styled-components/template" 

import { flatHover } from "./flat.hover.styled.component"
import { flatFocus } from "./flat.focus.styled.component"

import { duration, paletteRGBA, size, transparency } from "../../../themes"

export const flat = ({
    $flexGrow = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,

    $minWidth = size.box,
    $maxWidth = undefined,

    $minHeight = size.box,
    $maxHeight = undefined,

    $backgroundColor = 'transparent',
    $hoverBackgroundColor = paletteRGBA().theme_1.primaryVariant,
    $focusBackgroundColor = undefined,

    $textAlign = 'center',
    $hoverTextAlign = undefined,
    $focusTextAlign = undefined,

    $color = paletteRGBA().theme_1.onPrimary, 

    $opacity = transparency.medium,
    $hoverOpacity = '1',
    $focusOpacity = undefined,

    $borderStyle = 'none',

    $outlineStyle = 'none',

    $transitionDuration = duration.fast,
}) => {
    return template({
        $flexGrow : $flexGrow,

        $gridColumn : $gridColumn,
        $gridRow : $gridRow,

        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $minHeight : $minHeight,
        $maxHeight : $maxHeight,

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