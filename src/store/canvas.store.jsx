import { create } from "zustand";

export const useCanvasStore = create((set, get) =>({
    pixelSize : '24px',

    columnsCount : 16,
    rowsCount : 16,

    pointer: {
        pressed : false,
        button : -1,
    },

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

    setPointer : ({pressed, button}) =>{
        const newPointer = {
            pressed,
            button
        }

        set({pointer : newPointer})
    }
}))