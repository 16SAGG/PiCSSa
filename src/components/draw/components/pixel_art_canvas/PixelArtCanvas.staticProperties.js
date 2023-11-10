export const canvasStaticProperties = ({
    $rowsCount = 8,
    $columnsCount = 8,
    $pixelSize = 24,

    $display = 'grid',
    $gridTemplateColumns = `repeat(${$columnsCount}, ${$pixelSize}px)`,
    $gridTemplateRows = `repeat(${$rowsCount}, ${$pixelSize}px)`,
    $opacity = '1',
}) =>{
    return {
        $display,
        $gridTemplateColumns,
        $gridTemplateRows,
        $opacity
    }
}
