import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA } from "../../../themes"

export const numberInput = ({
    $backgroundColor = paletteRGBA().theme_1.primary,
    $color = paletteRGBA().theme_1.onPrimary,

    $textAlign = 'center',
    
    $borderStyle = 'none',
    $outlineStyle = 'none',

    $paddingTop = '0px',
    $paddingBottom = '0px',
    $paddingLeft = '0px',
    $paddingRight = '0px',

    $maxWidth = '24px',
}) => {
    return template({
        $backgroundColor,
        $color,

        $textAlign,

        $borderStyle,
        $outlineStyle,

        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        $paddingRight,

        $maxWidth,
    })
}