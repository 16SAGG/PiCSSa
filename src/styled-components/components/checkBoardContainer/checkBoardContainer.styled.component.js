import { template } from "clean-styled-components/src/styled-components/template" 

import { border, duration, paletteRGBA, transparency } from "../../../themes"
import { checkBoardPattern } from "../../values/checkBoardPattern.styled.value"
import { checkBoardContainerHover } from "./checkBoardContainer.styled.hover.component"

export const checkBoardContainer = ({
    $display = 'flex',

    $flexGrow = undefined,

    $gridColumn = undefined,
    $gridRow = undefined,

    $gridTemplateColumns =  undefined,
    $gridTemplateRows = undefined,

    $width = undefined,
    $minHeight = undefined,
    $maxHeight = undefined,
    
    $height = undefined,
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

    $paddingTop = undefined,
    $paddingBottom  = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,

    $transitionDuration = duration.fast,

    $zIndex = undefined
}) => {
    return template({
        $display,

        $flexGrow,

        $gridColumn,
        $gridRow,
        
        $gridTemplateColumns,
        $gridTemplateRows,

        $height,
        $minHeight,
        $maxHeight,

        $width,
        $minWidth,
        $maxWidth,

        $opacity,

        $backgroundColor,
        $backgroundImage,
        $backgroundSize,
        $backgroundPosition,

        $borderStyle,
        $borderColor,
        $borderTopWidth,
        $borderBottomWidth,
        $borderLeftWidth,
        $borderRightWidth,

        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        $paddingRight,

        $transitionDuration,

        $zIndex,

        $hoverProperties : checkBoardContainerHover({
            $hoverOpacity,
        })
    })
}