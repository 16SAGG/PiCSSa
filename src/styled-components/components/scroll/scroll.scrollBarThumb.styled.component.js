import { template } from "clean-styled-components/src/styled-components/template" 

export const scrollScrollBarThumb = ({
    $scrollBarThumbBackgroundColor = undefined,
}) => {
    return template({
        $backgroundColor : $scrollBarThumbBackgroundColor,
    })
}