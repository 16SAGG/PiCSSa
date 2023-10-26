import { create } from "zustand";

export const useColorsStore = create((set, get) =>({
    currentPalette : 0,
    palettes : [],

    currentColors : {
        primary : "#000",
        secondary : "transparent",
    },

    fetchPalettes : async () =>{
        const res = await fetch(`http://localhost:5173/palettes.data.json`)
        const palettes = await res.json()

        set({palettes})
    },

    setCurrentColors : (keyInput, newColor) =>{
        const {currentColors} = get()
        const newCurrentColors = structuredClone(currentColors)
        
        if (keyInput === 0) newCurrentColors.primary = newColor
        else newCurrentColors.secondary = newColor

        set({currentColors : newCurrentColors})
    }
}))