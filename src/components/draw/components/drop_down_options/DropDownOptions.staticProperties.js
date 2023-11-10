import { transparency, border, paletteRGBA, size } from "../../../../themes"

export const contentStaticProperties = ({
    $display = 'none',
    $flexDirection = 'column',
    
    $backgroundColor = paletteRGBA().theme_1.primaryVariant, 

    $borderStyle = 'solid',
    $borderColor = paletteRGBA(transparency.dark).theme_1.onPrimary,
    $borderTopWidth = border.width.small,
    $borderBottomWidth = border.width.small,
    $borderRightWidth = border.width.small,
    $borderLeftWidth = border.width.small,

    $listStyleType = 'none',
    
    $paddingTop = `${parseFloat(size.box)/8}px`,
    $paddingBottom = `${parseFloat(size.box)/8}px`,
    $paddingLeft = '0px',

    $marginTop = '0px',
    $marginBottom = '0px',
    
    $position = 'absolute',
    $zIndex = '1',
}) =>{
    return {
        $display,
        $flexDirection,

        $backgroundColor,

        $borderStyle,
        $borderColor,
        $borderTopWidth,
        $borderBottomWidth,
        $borderLeftWidth,
        $borderRightWidth,

        $listStyleType,
        
        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        
        $marginTop,
        $marginBottom,
        
        $position,
        $zIndex
    }
}

export const buttonStaticProperties = ({
    $backgroundColor = 'transparent',
    $hoverBackgroundColor = undefined,

    $opacity = transparency.medium,

    $color = paletteRGBA().theme_1.onPrimary,
    $hoverColor = undefined,
})=>{
    return {
        $backgroundColor,
        $hoverBackgroundColor,

        $opacity,

        $color,
        $hoverColor
    }
}