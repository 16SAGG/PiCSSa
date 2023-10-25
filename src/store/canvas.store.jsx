import { create } from "zustand";

export const useCanvasStore = create((set) =>({
    pixelSize : '48px',

    columnsCount : 8,
    rowsCount : 8,

    pointerPressed : false,

    setPixelSize : (newSize) =>{
        const strNewSize = `${newSize}px`
        set({pixelSize : strNewSize})
    },

    setColumnsCount : (newCount) =>{
        set({columnsCount : newCount})
    },

    setRowsCount : (newCount) =>{
        set({rowsCount : newCount})
    },

    setPointerPressed : (value) =>{
        set({pointerPressed : value})
    }
}))