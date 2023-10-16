import { template } from "clean-styled-components/src/styled-components/template" 

export const scrollScrollBarThumb = ({
    $backgroundColorScrollBarThumb = undefined,
}) => {
    return template({
        $backgroundColor : $backgroundColorScrollBarThumb,
    })
}