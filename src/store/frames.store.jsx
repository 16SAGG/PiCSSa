import { create } from "zustand";

import { createArray } from "../utilities/createArray";

export const useFramesStore = create((set, get) =>({
    currentFrame : 0,
    framesList : [],

    newFrame : ({columnsCount = 8, rowsCount = 8}) =>{
        const newFrame = createArray({columnsCount, rowsCount}, 'transparent')
        const { framesList } = get()

        set({ framesList : framesList.concat([newFrame])})
    },

    editPixel : (isActive = false, {coordX = 0, coordY = 0}, newColor = 'transparent') =>{
        if (!isActive) return
        
        const { currentFrame, framesList } = get()

        framesList[currentFrame][coordY][coordX] = newColor
        
        set({framesList})
    }
}))
