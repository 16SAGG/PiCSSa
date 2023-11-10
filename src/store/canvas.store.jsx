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

    setColumnsCount : (newColumnsCount) =>{
        const {canvasDimensions} = get()

        const newColumnsCountIsNotValid = newColumnsCount < DIMENSIONS_COUNT_MIN || newColumnsCount > DIMENSIONS_COUNT_MAX
        if (newColumnsCountIsNotValid) return

        const newCanvasDimensions = structuredClone(canvasDimensions)
        newCanvasDimensions.columnsCount = newColumnsCount

        set({canvasDimensions : newCanvasDimensions})
    },

    setRowsCount : (newRowsCount) =>{
        const {canvasDimensions} = get()

        const newRowsCountIsNotValid = newRowsCount < DIMENSIONS_COUNT_MIN || newRowsCount > DIMENSIONS_COUNT_MAX
        if (newRowsCountIsNotValid) return

        const newCanvasDimensions = structuredClone(canvasDimensions)
        newCanvasDimensions.rowsCount = newRowsCount

        set({canvasDimensions : newCanvasDimensions})
    },

    setPointer : ({isPressed, button}) =>{
        set({pointer : {isPressed, button}})
    }
}))