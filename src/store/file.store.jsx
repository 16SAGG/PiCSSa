import { create } from "zustand";

export const useFileStore = create((set) =>({
    fileName : 'undefined',

    setName : (fileName) =>{
        set({fileName})
    }
}))