import { template } from "clean-styled-components/src/styled-components/template" 
import { paletteRGBA, size } from "../../../themes"

export const rangeInputSliderThumb = ({
    $sliderThumbAppearance = 'none',

    $sliderThumbBackgroundColor = paletteRGBA().theme_1.onPrimary, 

    $sliderThumbCursor = 'pointer',

    $sliderThumbWidth = `${parseFloat(size.box)/4}px`,

    $sliderThumbHeight = `${parseFloat(size.box)/2}px`,
}) => {
    return template({
        $appearance : $sliderThumbAppearance,

        $backgroundColor : $sliderThumbBackgroundColor,

        $cursor : $sliderThumbCursor,
        
        $width : $sliderThumbWidth,

        $height : $sliderThumbHeight,
    })
}