import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA} from "../../../themes"

export const text = ({
    $flexGrow = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,

    $color = paletteRGBA().theme_1.onPrimary,

    $backgroundColor = undefined,

    $textAlign = undefined,

    $minWidth = undefined,

    $minHeight = undefined,
}) => {
    return template({
        $flexGrow,

        $gridColumn,
        $gridRow,

        $color,

        $backgroundColor,

        $textAlign,

        $minWidth,

        $minHeight,
    })
}