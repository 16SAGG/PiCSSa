import { template } from "clean-styled-components/src/styled-components/template" 

import { paletteRGBA, transparency } from "../../../themes"

export const scrollScrollBarThumbHover = ({
    $scrollBarThumbHoverBackgroundColor = paletteRGBA(transparency.medium).theme_1.onPrimary,
}) => {
    return template({
        $backgroundColor : $scrollBarThumbHoverBackgroundColor,
    })
}