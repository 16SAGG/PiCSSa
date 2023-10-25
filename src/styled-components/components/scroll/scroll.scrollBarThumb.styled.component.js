import { template } from "clean-styled-components/src/styled-components/template" 

import { paletteRGBA, transparency } from "../../../themes"

export const scrollScrollBarThumb = ({
    $scrollBarThumbBackgroundColor = paletteRGBA(transparency.dark).theme_1.onPrimary,
}) => {
    return template({
        $backgroundColor : $scrollBarThumbBackgroundColor,
    })
}