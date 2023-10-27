import { create } from "zustand";

export const useCanvasStore = create((set) =>({
    canvasDimensions : {
        pixelSize : '24px',
    
        columnsCount : 16,
        rowsCount : 16,
    },
    
    pointer : {
        pressed : false,
        button : -1,
    },

    setPointer : ({pressed, button}) =>{
        const newPointer = {
            pressed,
            button
        }

        set({pointer : newPointer})
    }
}))