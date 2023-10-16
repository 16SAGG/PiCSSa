import { template } from "clean-styled-components/src/styled-components/template" 

export const scrollScrollbar = ({
    $scrollBarMaxWidth = undefined
}) => {
    return template({
        $maxWidth : $scrollBarMaxWidth,
    })
}