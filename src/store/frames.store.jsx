import { create } from "zustand";

import { createArray } from "../utilities/createArray";

export const useFramesStore = create((set, get) =>({
    currentFrame : 0,
    framesList : [],

    createNewFrame : ({columnsCount = 8, rowsCount = 8}) =>{
        const newFrame = createArray({columnsCount, rowsCount}, 'transparent')
        const { framesList } = get()

        

        set({ framesList : framesList.concat([newFrame])})
    },
}))
