import { template } from "clean-styled-components/src/styled-components/template" 

export const scrollScrollBarThumbHover = ({
    $scrollBarThumbHoverBackgroundColor = undefined
}) => {
    return template({
        $backgroundColor : $scrollBarThumbHoverBackgroundColor,
    })
}