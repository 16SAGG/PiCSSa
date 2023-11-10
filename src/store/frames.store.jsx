import { create } from "zustand";

import { createArray } from "../utilities/createArray";
import { DIMENSIONS_COUNT_MAX, DIMENSIONS_COUNT_MIN } from "../utilities/constantValues";

export const useFramesStore = create((set, get) =>({
    currentFrame : 0,
    framesList : [],

    setCurrentFrame : (newCurrentFrame) =>{
        const newCurrentFrameIsNotValid = newCurrentFrame <= -1

        set({currentFrame : (newCurrentFrameIsNotValid) ? 0 : newCurrentFrame})
    },

    createNewFrame : ({columnsCount = 8, rowsCount = 8}) =>{
        const newFrame = createArray({columnsCount, rowsCount}, 'transparent')
        const { framesList } = get()

        set({ framesList : framesList.concat([newFrame])})
    },

    addAColumn : () =>{
        const {framesList} = get()
        
        const aNewColumnCantBeAdded = framesList[0][0].length + 1 > DIMENSIONS_COUNT_MAX
        if (aNewColumnCantBeAdded) return

        const newFramesList = structuredClone(framesList)

        newFramesList.map((frame) =>{
            frame.map((row) =>{
                row.push('transparent')
            })
        })

        set({ framesList : newFramesList})
    },

    removeAColumn : () =>{
        const {framesList} = get()

        const aColumnCantBeRemoved = framesList[0][0].length - 1 < DIMENSIONS_COUNT_MIN
        if (aColumnCantBeRemoved) return

        const newFramesList = structuredClone(framesList)

        newFramesList.map((frame) =>{
            frame.map((row) =>{
                row.splice(row.length - 1, 1)
            })
        })

        set({ framesList : newFramesList})
    },

    addARow : () =>{
        const {framesList} = get()

        const aNewRowCantBeAdded = framesList[0].length + 1 > DIMENSIONS_COUNT_MAX
        if (aNewRowCantBeAdded) return

        const newFramesList = structuredClone(framesList)

        newFramesList.map((frame) =>{
            const columnsCount = frame[0].length
            
            const newRow = []
            for (let index = 0; index < columnsCount; index++){
                newRow.push('transparent')
            }
            
            frame.push(newRow)
        })
        
        set({ framesList : newFramesList})
    },

    removeARow : () =>{
        const {framesList} = get()

        const aRowCantBeRemoved = framesList[0].length - 1 < DIMENSIONS_COUNT_MIN
        if (aRowCantBeRemoved) return

        const newFramesList = structuredClone(framesList)

        newFramesList.map((frame) =>{
            frame.splice(frame.length - 1, 1)
        })
        
        set({ framesList : newFramesList})
    },

    duplicateFrame : (framePosition) =>{
        const { framesList } = get()
        const newFramesList = structuredClone(framesList)

        newFramesList.splice(framePosition + 1, 0, framesList[framePosition])

        set({ framesList : newFramesList})
    },

    moveFrameTo : (framePosition, newPosition) =>{
        const { framesList } = get()
        
        const newPositionIsNotValid = framesList[newPosition] === null
        if (newPositionIsNotValid) return

        const newFramesList = structuredClone(framesList)
        const frameToMove = newFramesList.splice(framePosition, 1)[0]
        newFramesList.splice(newPosition, 0, frameToMove)

        set({ framesList : newFramesList})
    },

    editFrame : (newFrameInfo) =>{
        const { currentFrame, framesList} = get()
        const newFrameList = structuredClone(framesList)
        newFrameList[currentFrame] = newFrameInfo

        set({ framesList : newFrameList})
    },

    deleteFrame : (framePosition) =>{
        const { framesList, currentFrame, setCurrentFrame } = get()

        const thereIsNoMoreThanOneFrame = framesList.length <= 1 
        if (thereIsNoMoreThanOneFrame) return 

        const newFramesList = structuredClone(framesList)
        newFramesList.splice(framePosition, 1)

        set({ framesList : newFramesList,})

        const framePositionIsEqualToTheCurrentFrame = framePosition === currentFrame
        if (framePositionIsEqualToTheCurrentFrame) setCurrentFrame(currentFrame - 1)
        else setCurrentFrame(currentFrame)
    },

    resetProject : () => {
        set({
            currentFrame : 0,
            framesList : [],
        })
    },
}))
