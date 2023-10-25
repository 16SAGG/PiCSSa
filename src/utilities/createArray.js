export const createArray = ({columnsCount = 8, rowsCount = 8}, content = 'transparent') =>{
    return Array(columnsCount).fill(Array(rowsCount).fill(content))
}