import { template } from "clean-styled-components/src/styled-components/template" 

export const flatFocus = ({
    $focusBackgroundColor = undefined,
    $focusTextAlign = undefined,
    $focusOpacity = undefined,
}) => {
    return template({
        $backgroundColor : $focusBackgroundColor,

        $textAlign : $focusTextAlign,

        $opacity : $focusOpacity,
    })
}