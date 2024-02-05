import { create } from "zustand";
import { DIMENSIONS_COUNT_MAX, DIMENSIONS_COUNT_MIN } from "../utilities/constantValues";

const PIXEL_SIZE_MIN = 12
const PIXEL_SIZE_MAX = 120
const PIXEL_GROWTH = 12

export const useCanvasStore = create((set, get) =>({
    canvasDimensions : {
        pixelSize : 24,
    
        columnsCount : 16,
        rowsCount : 16,
    },
    
    pointer : {
        isPressed : false,
        button : -1,
    },

    increasePixelSize : () =>{
        const {canvasDimensions} = get()

        const pixelsCantContinueGrowing =  canvasDimensions.pixelSize >= PIXEL_SIZE_MAX
        if (pixelsCantContinueGrowing) return

        const newCanvasDimensions = structuredClone(canvasDimensions)
        newCanvasDimensions.pixelSize = newCanvasDimensions.pixelSize + PIXEL_GROWTH

        set({canvasDimensions : newCanvasDimensions})
    },

    reducePixelSize : () =>{
        const {canvasDimensions} = get()

        const pixelsCantContinueShrinking =  canvasDimensions.pixelSize <= PIXEL_SIZE_MIN
        if (pixelsCantContinueShrinking) return

        const newCanvasDimensions = structuredClone(canvasDimensions)
        newCanvasDimensions.pixelSize = newCanvasDimensions.pixelSize - PIXEL_GROWTH

        set({canvasDimensions : newCanvasDimensions})
    },

    setColumnsXRowsCount : (newColumnsXRowsCount) =>{
        const {canvasDimensions} = get()

        const newColumnsXRowsCountIsNotValid = newColumnsXRowsCount < DIMENSIONS_COUNT_MIN || newColumnsXRowsCount > DIMENSIONS_COUNT_MAX
        if (newColumnsXRowsCountIsNotValid) return

        const newCanvasDimensions = structuredClone(canvasDimensions)
        newCanvasDimensions.columnsCount = newColumnsXRowsCount
        newCanvasDimensions.rowsCount = newColumnsXRowsCount

        set({canvasDimensions : newCanvasDimensions})
    },

    setPointer : ({isPressed, button}) =>{
        set({pointer : {isPressed, button}})
    }
}))