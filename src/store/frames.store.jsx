import { create } from "zustand";

import { createArray } from "../utilities/createArray";

export const useFramesStore = create((set, get) =>({
    currentFrame : 0,
    framesList : [createArray({})],

    newFrame : ({columnsCount = 8, rowsCount = 8}) =>{
        const newFrame = createArray({columnsCount, rowsCount}, 'transparent')
        const { framesList } = get()

        set({ framesList : framesList.concat([newFrame])})
    },

    editPixel : (isActive = false, {coordX = 0, coordY = 0}, newColor = 'transparent') =>{
        if (!isActive) return
        
        const { currentFrame, framesList } = get()
        
        const editFrame = framesList[currentFrame].map((row, indexY) =>{
            return row.map((pixelColor, indexX) =>{
                const itsThePixelThatWeWillChange = `${indexX}: ${indexY}` === `${coordX}: ${coordY}`
                
                if (itsThePixelThatWeWillChange) return newColor
                return pixelColor
            })
        })

        const updateFrames = framesList.map((frame) =>{
            const itsTheFrameThatWeWillEdit = framesList[currentFrame] === frame
            
            if (itsTheFrameThatWeWillEdit) return editFrame
            return frame
        })

        set({framesList : updateFrames})
    }
}))
