import { paletteRGBA } from "../../../../../../../../themes"

export const IDContainerStaticProperties = ({
    $display = 'flex',
    $flexGrow = '1',
    $alignItems = 'center',
    $justifyContent = 'center',
    $borderStyle = 'none',
    $backgroundColor = paletteRGBA().theme_1.primaryVariant,
}) =>{
    const result = {
        $display,
        $flexGrow,
        $alignItems,
        $justifyContent,
        $borderStyle,
        $backgroundColor,
    }

    return result
}
