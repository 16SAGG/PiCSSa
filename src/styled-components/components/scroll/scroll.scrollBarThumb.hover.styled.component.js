import { template } from "clean-styled-components/src/styled-components/template" 

export const scrollScrollBarThumbHover = ({
    $backgroundColorScrollBarThumbHover= undefined
}) => {
    return template({
        $backgroundColor : $backgroundColorScrollBarThumbHover,
    })
}