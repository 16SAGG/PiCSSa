import { template } from "clean-styled-components/src/styled-components/template" 

import { paletteRGBA } from "../../../themes"

export const iconButtonHover = ({
    $hoverOpacity = '1',

    $hoverBackgroundColor = paletteRGBA().theme_1.primaryVariant,
}) => {
    return template({
        $opacity : $hoverOpacity,

        $backgroundColor : $hoverBackgroundColor,
    })
}