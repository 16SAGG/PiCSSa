import { template } from "clean-styled-components/src/styled-components/template" 

import { size } from "../../../themes"

export const scrollScrollbar = ({
    $scrollBarMaxWidth = `${parseFloat(size.box)/6}px`,
    $scrollBarMaxHeight = `${parseFloat(size.box)/6}px`,
}) => {
    return template({
        $maxWidth : $scrollBarMaxWidth,
        $maxHeight : $scrollBarMaxHeight,
    })
}