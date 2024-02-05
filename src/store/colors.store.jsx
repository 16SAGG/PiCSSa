import { create } from "zustand";
import { palettes } from "../data/palettes.data";

export const useColorsStore = create((set, get) =>({
    currentPalette : 0,
    palettesList : [],

    currentColors : {
        primary : "rgb(0, 0, 0)",
        secondary : "transparent",
    },

    fetchPalettesList : () =>{
        const palettesList = palettes
        set({palettesList})
    },

    setCurrentColors : (keyInput, newColor) =>{
        const {currentColors} = get()
        const newCurrentColors = structuredClone(currentColors)
        
        const buttonPressedWasLeftClick = keyInput === 0
        if (buttonPressedWasLeftClick) newCurrentColors.primary = newColor
        else newCurrentColors.secondary = newColor

        set({currentColors : newCurrentColors})
    }
}))