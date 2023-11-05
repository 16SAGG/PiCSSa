import { paletteRGBA } from "../../../../../../../../themes";

export const contentStaticProperties = {
    $display : 'flex',
    $flexGrow : '1',
    $borderStyle : 'solid',
    $borderColor : paletteRGBA().theme_1.primaryVariant,
    $opacity : '1',
    $hoverOpacity : undefined,
}

export const previewerStaticProperties = ({
    $flexGrow = 1,
    $paddingTop = undefined,
    $paddingBottom = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,
}) => {
    return {
        $flexGrow,
        $paddingTop,
        $paddingBottom,
        $paddingLeft,
        $paddingRight,
    }
}