import { template } from "clean-styled-components/src/styled-components/template" 

import { size } from "../../../themes"

import { scrollScrollbar } from "./scroll.scrollBar.styled.component"
import { scrollScrollBarThumb } from "./scroll.scrollBarThumb.styled.component"
import { scrollScrollBarThumbHover } from "./scroll.scrollBarThumb.hover.styled.component"
import { scrollScrollBarCorner } from "./scroll.scrollBarCorner.styled.component"

export const scroll = ({
    $display = 'flex',

    $flexDirection = 'column',

    $flexGrow = '1',

    $alignItems = undefined,
    $justifyContent = undefined,

    $gap = size.gap,
    
    $overflow = 'auto',

    $maxWidth = undefined,
    $maxHeight = undefined,

    $listStyleType = undefined,
    $listStylePosition = undefined,
    $listStyleImage = undefined,

    $scrollBarMaxWidth = undefined,
    $scrollBarMaxHeight = undefined,
    
    $marginTop = '0px',
    $marginBottom = '0px',
    $marginLeft = '0px',
    $marginRight = '0px',

    $paddingTop = '0px',
    $paddingBottom  = '0px',
    $paddingLeft = '0px',
    $paddingRight = '0px',

    $backgroundColor = 'transparent',
    $scrollBarCornerBackgroundColor = undefined,
    $scrollBarThumbBackgroundColor = undefined,
    $scrollBarThumbHoverBackgroundColor = undefined,
}) => {
    return template({
        $display : $display,

        $flexDirection : $flexDirection,

        $flexGrow : $flexGrow,

        $alignItems : $alignItems,
        $justifyContent : $justifyContent,

        $gap : $gap,
        
        $overflow : $overflow,
    
        $maxWidth : $maxWidth,
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
            $scrollBarMaxHeight : $scrollBarMaxHeight,
        }),

        $scrollBarCornerProperties : scrollScrollBarCorner({
            $scrollBarCornerBackgroundColor : $scrollBarCornerBackgroundColor,
        }),

        $scrollBarThumbProperties : scrollScrollBarThumb({
            $scrollBarThumbBackgroundColor : $scrollBarThumbBackgroundColor,
        }),

        $scrollBarThumbHoverProperties : scrollScrollBarThumbHover ({
            $scrollBarThumbHoverBackgroundColor : $scrollBarThumbHoverBackgroundColor,
        })
    })
}