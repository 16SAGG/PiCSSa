export const previewerBoxStaticProperties = ({
    $paddingTop = undefined,
    $paddingBottom  = undefined,
    $paddingLeft = undefined,
    $paddingRight = undefined,
    $flexGrow = '1',
    $opacity = '1',
}) => {
    console.log($paddingTop)
    return {
        $paddingTop,
        $paddingBottom, 
        $paddingLeft,
        $paddingRight,
        $flexGrow,
        $opacity,
    }
}