import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA } from "../../../themes"

export const textInputFocus = ({
    $focusOpacity = '1',

    $focusTextAlign = 'left',

    $focusBackgroundColor = paletteRGBA().theme_1.primaryVariant,
}) => {
    return template({
        $opacity : $focusOpacity,

        $textAlign : $focusTextAlign,

        $backgroundColor : $focusBackgroundColor,
    })
}