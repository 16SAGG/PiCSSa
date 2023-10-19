import { template } from "clean-styled-components/src/styled-components/template" 

import { duration, paletteRGBA, size, transparency } from "../../../themes"
import { rangeInputHover } from "./rangeInput.styled.hover.component"
import { rangeInputSliderThumb } from "./rangeInput.styled.SliderThumb.component"


export const rangeInput = ({
    $flexGrow = undefined,

    $appearance = 'none',
    $sliderThumbAppearance = undefined,

    $opacity = transparency.medium,
    $hoverOpacity = undefined,

    $backgroundColor = paletteRGBA().theme_1.primaryVariant,
    $sliderThumbBackgroundColor = undefined,
    
    $sliderThumbCursor = undefined,

    $sliderThumbWidth = undefined,

    $height = `${parseFloat(size.box)/4}px`,
    $sliderThumbHeight = undefined,

    $outlineStyle = 'none',

    $transitionDuration = duration.fast,

    $marginTop = '0px',
    $marginBottom = '0px',
    $marginLeft = '0px',
    $marginRight = '0px',
}) => {
    return template({
        $flexGrow : $flexGrow,

        $appearance : $appearance,

        $opacity : $opacity,

        $backgroundColor : $backgroundColor,

        $height : $height,

        $outlineStyle : $outlineStyle,
        
        $transitionDuration : $transitionDuration,

        $marginTop : $marginTop,
        $marginBottom : $marginBottom,
        $marginLeft : $marginLeft,
        $marginRight :  $marginRight,

        $hoverProperties : rangeInputHover({
            $hoverOpacity : $hoverOpacity,
        }),

        $sliderThumbProperties : rangeInputSliderThumb({
            $sliderThumbAppearance : $sliderThumbAppearance,

            $sliderThumbBackgroundColor : $sliderThumbBackgroundColor, 

            $sliderThumbCursor : $sliderThumbCursor,

            $sliderThumbWidth : $sliderThumbWidth,

            $sliderThumbHeight : $sliderThumbHeight,
        })
    })
}