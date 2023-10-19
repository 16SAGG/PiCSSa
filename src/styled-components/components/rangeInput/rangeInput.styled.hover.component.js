import { template } from "clean-styled-components/src/styled-components/template" 

export const rangeInputHover = ({
    $hoverOpacity = '1',
}) => {
    return template({
        $opacity : $hoverOpacity,
    })
}