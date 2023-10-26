import { size } from "../../../../themes";

export const canvasStaticProperties = ({
    $rowsCount = 8,
    $columnsCount = 8,
    $pixelSize = size.box,

    $display = 'grid',
    $gridTemplateColumns = `repeat(${$columnsCount}, ${$pixelSize})`,
    $gridTemplateRows = `repeat(${$rowsCount}, ${$pixelSize})`,
    $opacity = '1',
}) =>{
    const result = {
        $display : $display,
        $gridTemplateColumns : $gridTemplateColumns,
        $gridTemplateRows : $gridTemplateRows,
        $opacity : $opacity,
    }
    return result;
}
