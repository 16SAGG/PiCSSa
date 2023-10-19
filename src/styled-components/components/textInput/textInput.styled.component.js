import { template } from "clean-styled-components/src/styled-components/template" 
import { textInputFocus } from "./textInput.styled.focus.component"
import { duration, paletteRGBA, transparency } from "../../../themes"

export const textInput = ({
    $flexGrow = undefined,

    $opacity = transparency.medium,
    $focusOpacity = undefined,

    $textAlign = 'center',
    $focusTextAlign = undefined,

    $backgroundColor = 'transparent',
    $focusBackgroundColor = undefined,

    $color = paletteRGBA().theme_1.onPrimary,

    $borderStyle = 'none',
    $outlineStyle = 'none',

    $transitionDuration = duration.fast,
}) => {
    return template({
        $flexGrow : $flexGrow,

        $opacity : $opacity,

        $textAlign : $textAlign,

        $backgroundColor : $backgroundColor,

        $color : $color,

        $borderStyle : $borderStyle,
        $outlineStyle : $outlineStyle,
        
        $transitionDuration : $transitionDuration,

        $focusProperties : textInputFocus({
            $focusOpacity : $focusOpacity,
            $focusBackgroundColor : $focusBackgroundColor,
            $focusTextAlign : $focusTextAlign,
        })
    })
}