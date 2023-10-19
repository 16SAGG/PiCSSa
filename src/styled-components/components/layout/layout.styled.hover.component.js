import { template } from "clean-styled-components/src/styled-components/template" 

export const layoutHover = ({
    $hoverOpacity = undefined,
}) => {
    return template({
        $opacity : $hoverOpacity,
    })
}