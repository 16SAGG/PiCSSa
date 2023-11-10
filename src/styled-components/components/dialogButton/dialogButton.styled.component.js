import { template } from "clean-styled-components/src/styled-components/template" 
import { duration, paletteRGBA, size } from "../../../themes"
import { dialogButtonHover } from "./dialogButton.styled.hover.component"

export const dialogButton = ({
    $backgroundColor = 'transparent',
    $hoverBackgroundColor = undefined,

    $color = paletteRGBA().theme_1.onPrimary,
    $hoverColor = undefined,

    $outlineStyle = 'none',
    $borderStyle = 'solid',
    $borderColor = paletteRGBA().theme_1.onPrimary,

    $minWidth = `${parseFloat(size.box)* 2}px`,

    $transitionDuration = duration.fast,
}) =>{
    return template({
        $backgroundColor,

        $color,

        $outlineStyle,
        $borderStyle,
        $borderColor,

        $minWidth,

        $transitionDuration,

        $hoverProperties : dialogButtonHover({
            $hoverBackgroundColor,
            $hoverColor,
        })
    })
}