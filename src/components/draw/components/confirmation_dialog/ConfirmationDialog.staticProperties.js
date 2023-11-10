import { border, paletteRGBA, transparency } from "../../../../themes";

export const dialogContainerStaticProperties = {
    $backgroundColor : paletteRGBA().theme_1.primary,
    $color : paletteRGBA().theme_1.onPrimary,
    $borderColor : paletteRGBA(transparency.dark).theme_1.onPrimary,
    $borderTopWidth : border.width.medium,
    $borderBottomWidth : border.width.medium,
    $borderLeftWidth : border.width.medium,
    $borderRightWidth : border.width.medium,
}

export const buttonsContainerStaticProperties = {
    $display : 'flex',
    $justifyContent : 'space-between',
}

export const confirmButtonStaticProperties = {
    $borderColor : paletteRGBA().theme_1.danger,
    $hoverBackgroundColor : paletteRGBA().theme_1.danger,
    $color : paletteRGBA().theme_1.danger,
    $hoverColor : paletteRGBA().theme_1.onDanger,
}