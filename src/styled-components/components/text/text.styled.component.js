import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA} from "../../../themes"

export const text = ({
    $flexGrow = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,

    $color = paletteRGBA().theme_1.onPrimary,
    $fontSize = undefined,
    $fontFamily = undefined,

    $backgroundColor = undefined,

    $paddingTop = undefined,
    $paddingBottom = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,

    $textAlign = undefined,

    $minWidth = undefined,
    $maxWidth = undefined,

    $minHeight = undefined,
    $maxHeight = undefined,
}) => {
    return template({
        $flexGrow,

        $gridColumn,
        $gridRow,

        $color,

        $fontSize,
        $fontFamily,

        $backgroundColor,

        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        $paddingRight,

        $textAlign,

        $minWidth,
        $maxWidth,

        $minHeight,
        $maxHeight,
    })
}