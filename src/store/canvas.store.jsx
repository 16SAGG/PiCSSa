import { create } from "zustand";

export const useCanvasStore = create((set) =>({
    canvasDimensions : {
        pixelSize : '24px',
    
        columnsCount : 16,
        rowsCount : 16,
    },
    
    pointer : {
        isPressed : false,
        button : -1,
    },

    setPointer : ({isPressed, button}) =>{
        set({pointer : {isPressed, button}})
    }
}))