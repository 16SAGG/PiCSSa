import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA} from "../../../themes"

export const dialogButtonHover = ({
    $hoverBackgroundColor = paletteRGBA().theme_1.onPrimary,

    $hoverColor = paletteRGBA().theme_1.primary,
}) =>{
    return template({
        $backgroundColor : $hoverBackgroundColor,

        $color : $hoverColor,
    })
}