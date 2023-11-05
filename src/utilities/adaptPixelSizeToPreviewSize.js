export const adaptPixelSizeToPreviewSize = (
    rectSize = 0, 
    columnsCount = 0, 
    rowsCount = 0
) =>{
    const columnsCountIsMoreThanRowsCount = columnsCount > rowsCount
    return (columnsCountIsMoreThanRowsCount) ? 
        rectSize/columnsCount
    :
        rectSize/rowsCount
}