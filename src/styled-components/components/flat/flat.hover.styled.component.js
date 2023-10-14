import { template } from "clean-styled-components/src/styled-components/template" 

export const flatHover = ({
    $hoverBackgroundColor = undefined,
    $hoverTextAlign = undefined,
    $hoverOpacity = undefined,
}) => {
    return template({
        $backgroundColor : $hoverBackgroundColor,

        $textAlign : $hoverTextAlign,

        $opacity : $hoverOpacity,
    })
}