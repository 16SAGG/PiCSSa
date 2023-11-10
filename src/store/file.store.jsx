import { create } from "zustand";

export const useFileStore = create((set) =>({
    pixelSizeExport : '1',
    fileName : 'undefined',

    setPixelSizeExport : (pixelSizeExport) =>{
        set({pixelSizeExport})
    },

    setName : (fileName) =>{
        set({fileName})
    }
}))