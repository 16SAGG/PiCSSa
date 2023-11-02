export const moveTowards = {}

moveTowards['-1: 0'] = (
    columnsCount = 0,
    rowsCount = 0,
) => {
    const auxRow = getAuxiliar({maxCount : rowsCount})

    for (let indexY = 0; indexY < columnsCount; indexY++) {
        for (let indexX = 0; indexX < rowsCount; indexX++ ) {
            const currentPixel = document.getElementById(`${indexX}: ${indexY}`)
            const nextPixel = document.getElementById(`${indexX + 1}: ${indexY}`)

            const nextPixelExist = nextPixel != null
            if (nextPixelExist) currentPixel.style.backgroundColor = nextPixel.style.backgroundColor
        }
    }

    auxRow.map((backgroundColor, index) => {
        const currentPixel = document.getElementById(`${columnsCount - 1}: ${index}`)
        currentPixel.style.backgroundColor = backgroundColor
    })
}

moveTowards['1: 0'] = (
    columnsCount = 0,
    rowsCount = 0,
) => {
    const auxRow = getAuxiliar({maxCount : rowsCount, anchorOfTheOtherAxis : columnsCount - 1})

    for (let indexY = 0; indexY < columnsCount; indexY++) {
        for (let indexX = rowsCount - 1; indexX >= 0; indexX-- ) {
            const currentPixel = document.getElementById(`${indexX}: ${indexY}`)
            const nextPixel = document.getElementById(`${indexX - 1}: ${indexY}`)

            const nextPixelExist = nextPixel != null
            if (nextPixelExist) currentPixel.style.backgroundColor = nextPixel.style.backgroundColor
        }
    }

    auxRow.map((backgroundColor, index) => {
        const currentPixel = document.getElementById(`${0}: ${index}`)
        currentPixel.style.backgroundColor = backgroundColor
    })
}

moveTowards['0: -1'] = (
    columnsCount = 0,
    rowsCount = 0,
) => {
    const auxColumn = getAuxiliar({maxCount : rowsCount, axis : 'y'})

    for (let indexY = 0; indexY < columnsCount; indexY++) {
        for (let indexX = 0; indexX < rowsCount; indexX++ ) {
            const currentPixel = document.getElementById(`${indexX}: ${indexY}`)
            const nextPixel = document.getElementById(`${indexX}: ${indexY + 1}`)

            const nextPixelExist = nextPixel != null
            if (nextPixelExist) currentPixel.style.backgroundColor = nextPixel.style.backgroundColor
        }
    }

    auxColumn.map((backgroundColor, index) => {
        const currentPixel = document.getElementById(`${index}: ${rowsCount - 1}`)
        currentPixel.style.backgroundColor = backgroundColor
    })
}

moveTowards['0: 1'] = (
    columnsCount = 0,
    rowsCount = 0,
) => {
    const auxColumn = getAuxiliar({maxCount : rowsCount, anchorOfTheOtherAxis : rowsCount - 1, axis : 'y'})

    for (let indexY = columnsCount - 1; indexY >= 0; indexY--) {
        for (let indexX = 0; indexX < rowsCount; indexX++ ) {
            const currentPixel = document.getElementById(`${indexX}: ${indexY}`)
            const nextPixel = document.getElementById(`${indexX}: ${indexY - 1}`)

            const nextPixelExist = nextPixel != null
            if (nextPixelExist) currentPixel.style.backgroundColor = nextPixel.style.backgroundColor
        }
    }

    auxColumn.map((backgroundColor, index) => {
        const currentPixel = document.getElementById(`${index}: ${0}`)
        currentPixel.style.backgroundColor = backgroundColor
    })
}

const getAuxiliar = ({
    maxCount = 0,
    anchorOfTheOtherAxis = 0,
    axis = 'x'
}) =>{
    const aux = []

    for(let index = 0; index < maxCount; index++){
        const axisIsX = axis === 'x'
        const id = (axisIsX) 
            ? `${anchorOfTheOtherAxis}: ${index}` 
            : `${index}: ${anchorOfTheOtherAxis}`
        aux.push(document.getElementById(id).style.backgroundColor)
    }

    return aux
}