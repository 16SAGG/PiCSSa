export const keepThePixelArtAspectRatio = (columnsCount = 0, rowsCount = 0) =>{
    const paddings = {
        width : 0,
        height : 0,
    }

    const columnsCountIsMoreThanRowsCount = columnsCount > rowsCount
    if (columnsCountIsMoreThanRowsCount) {
        paddings.height = (100 - (rowsCount*100/columnsCount))/2
    } else {
        paddings.width = (100 - (columnsCount*100/rowsCount))/2
    }

    return paddings
}