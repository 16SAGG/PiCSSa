import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA } from "../../themes"

export const colorRectangle = ({
    $flexGrow = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,

    $minWidth : $minWidth,

    $minHeight : $minHeight,

    $backgroundColor = paletteRGBA().theme_1.primary,

    $zIndex = undefined,
}) => {
    return template({
        $flexGrow : $flexGrow,

        $gridColumn : $gridColumn,
        $gridRow : $gridRow,

        $minHeight : $minHeight,

        $minWidth : $minWidth,

        $backgroundColor : $backgroundColor,

        $zIndex : $zIndex,
    })
}