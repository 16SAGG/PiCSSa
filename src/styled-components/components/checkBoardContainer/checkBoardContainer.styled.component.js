import { template } from "clean-styled-components/src/styled-components/template" 

import { border, duration, paletteRGBA, transparency } from "../../../themes"
import { checkBoardPattern } from "../../values/checkBoardPattern.styled.value"
import { checkBoardContainerHover } from "./checkBoardContainer.styled.hover.component"

export const checkBoardContainer = ({
    $display = 'flex',

    $flexGrow = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,

    $minHeight = undefined,
    $maxHeight = undefined,
    
    $minWidth = undefined,
    $maxWidth = undefined,

    $opacity = transparency.medium,
    $hoverOpacity = undefined,

    $backgroundColor = paletteRGBA().theme_1.primary,
    $checkBoardColor = undefined,
    $backgroundImage = checkBoardPattern.backgroundImage({$checkBoardColor}),
    $checkBoardBackgroundSize = undefined,
    $backgroundSize  = checkBoardPattern.backgroundSize({$checkBoardBackgroundSize}),
    $backgroundPosition = checkBoardPattern.backgroundPosition({$checkBoardBackgroundSize}),

    $borderStyle = undefined,
    $borderColor = paletteRGBA().theme_1.onPrimary,
    $borderTopWidth = border.width.medium,
    $borderBottomWidth = border.width.medium,
    $borderLeftWidth = border.width.medium,
    $borderRightWidth = border.width.medium,

    $transitionDuration = duration.fast,

    $zIndex = undefined
}) => {
    return template({
        $display : $display,

        $flexGrow : $flexGrow,

        $gridColumn : $gridColumn,
        $gridRow : $gridRow,
        
        $minHeight : $minHeight,
        $maxHeight : $maxHeight,

        $minWidth : $minWidth,
        $maxWidth : $maxWidth,

        $opacity : $opacity,

        $backgroundColor : $backgroundColor,
        $backgroundImage : $backgroundImage,
        $backgroundSize : $backgroundSize,
        $backgroundPosition : $backgroundPosition,

        $borderStyle : $borderStyle,
        $borderColor : $borderColor,
        $borderTopWidth : $borderTopWidth,
        $borderBottomWidth : $borderBottomWidth,
        $borderLeftWidth : $borderLeftWidth,
        $borderRightWidth : $borderRightWidth,

        $transitionDuration : $transitionDuration,

        $zIndex : $zIndex,

        $hoverProperties : checkBoardContainerHover({
            $hoverOpacity : $hoverOpacity,
        })
    })
}