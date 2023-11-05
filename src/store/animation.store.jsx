import { create } from "zustand";

export const useAnimationStore = create((set) =>({
    animationIsPlaying : true,
    FPS : 1,

    setAnimationIsPlaying : (animationIsPlaying) => {
        set({animationIsPlaying})
    },

    setFPS : (FPS) => {
        set({FPS})
    }
}))
