export const colorContainerStaticProperties = ({
    $borderStyle = 'solid',
    $gridColumn = undefined, 
    $gridRow = undefined, 
    $zIndex = undefined,
}) => {
    const result = {
        $borderStyle : $borderStyle,
        $gridColumn : $gridColumn ,
        $gridRow : $gridRow,
        $zIndex : $zIndex,
    }

    return result
}

export const colorStaticProperties = ({
    $backgroundColor = 'transparent',
    $flexGrow = '1',
}) => {
    const result = {
        $backgroundColor : $backgroundColor,
        $flexGrow : $flexGrow,
    }

    return result;
}