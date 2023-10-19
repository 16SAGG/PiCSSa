import { template } from "clean-styled-components/src/styled-components/template" 
import { scrollScrollbar } from "./scroll.scrollBar.styled.component"
import {  paletteRGBA, size, transparency } from "../../../themes"
import { scrollScrollBarThumb } from "./scroll.scrollBarThumb.styled.component"
import { scrollScrollBarThumbHover } from "./scroll.scrollBarThumb.hover.styled.component"

export const scroll = ({
    $display = 'flex',

    $flexDirection = 'column',

    $flexGrow = '1',

    $alignItems = undefined,

    $gap = size.gap,
    
    $overflow = 'auto',

    $maxHeight = undefined,

    $listStyleType = undefined,
    $listStylePosition = undefined,
    $listStyleImage = undefined,

    $scrollBarMaxWidth = `${parseFloat(size.box)/6}px`,
    
    $marginTop = '0px',
    $marginBottom = '0px',
    $marginLeft = '0px',
    $marginRight = '0px',

    $paddingTop = '0px',
    $paddingBottom  = '0px',
    $paddingLeft = '0px',
    $paddingRight = '0px',

    $backgroundColor = 'transparent',
    $scrollBarThumbBackgroundColor = paletteRGBA(transparency.dark).theme_1.onPrimary,
    $scrollBarThumbHoverBackgroundColor = paletteRGBA(transparency.medium).theme_1.onPrimary,
}) => {
    console.log($scrollBarMaxWidth)
    return template({
        $display : $display,

        $flexDirection : $flexDirection,

        $flexGrow : $flexGrow,

        $alignItems : $alignItems,

        $gap : $gap,
        
        $overflow : $overflow,
    
        $maxHeight : $maxHeight,

        $listStyleType : $listStyleType,
        $listStylePosition : $listStylePosition,
        $listStyleImage : $listStyleImage,

        $marginTop : $marginTop,
        $marginBottom : $marginBottom,
        $marginLeft : $marginLeft,
        $marginRight : $marginRight,

        $paddingTop : $paddingTop,
        $paddingBottom : $paddingBottom,
        $paddingLeft : $paddingLeft,
        $paddingRight : $paddingRight,
    
        $backgroundColor : $backgroundColor,

        $scrollBarProperties : scrollScrollbar({
            $scrollBarMaxWidth : $scrollBarMaxWidth,
        }),

        $scrollBarThumbProperties : scrollScrollBarThumb({
            $scrollBarThumbBackgroundColor : $scrollBarThumbBackgroundColor,
        }),

        $scrollBarThumbHoverProperties : scrollScrollBarThumbHover ({
            $scrollBarThumbHoverBackgroundColor : $scrollBarThumbHoverBackgroundColor,
        })
    })
}