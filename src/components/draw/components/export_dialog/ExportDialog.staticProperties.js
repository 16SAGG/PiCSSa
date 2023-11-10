import { paletteRGBA, size, transparency } from "../../../../themes";

export const exportDialogStaticProperties = {
    $backgroundColor : paletteRGBA().theme_1.primary,
    $borderColor : paletteRGBA(transparency.dark).theme_1.onPrimary
}

export const exportDialogContainerStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $minWidth : '40vw',
    $minHeight : '70vh',
    $gap : size.gutter,
}