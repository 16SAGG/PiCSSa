import { template } from "clean-styled-components/src/styled-components/template" 

export const colorButtonHover = ({
    $hoverBackgroundColor = undefined,
    $hoverOpacity = '1',
}) => {
    return template({
        $backgroundColor : $hoverBackgroundColor,
        $opacity : $hoverOpacity,
    })
}