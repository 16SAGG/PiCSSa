import { template } from "clean-styled-components/src/styled-components/template" 

import { paletteRGBA } from "../../../themes"

export const scrollScrollBarCorner = ({
    $scrollBarCornerBackgroundColor = 'transparency',
}) => {
    return template({
        $backgroundColor: $scrollBarCornerBackgroundColor,
    })
}