export const createArray = ({columnsCount = 8, rowsCount = 8}, content = 'transparent') =>{
    return Array.from(
        Array(rowsCount), (_, i) => Array(columnsCount).fill(content)
    )
}