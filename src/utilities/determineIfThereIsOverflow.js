export const determineIfThereIsOverflow = (child, father) =>{
    const overflow = {
        width : false,
        height : false,
    }

    const childWidth = child.offsetWidth
    const childHeight = child.offsetHeight

    const fatherWidth = father.offsetWidth 
    const fatherHeight = father.offsetHeight

    overflow.width = childWidth > fatherWidth
    overflow.height = childHeight > fatherHeight

    return overflow
}