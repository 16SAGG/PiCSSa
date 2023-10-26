import { useState } from "react"

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { useCanvasStore } from "../../../../../store/canvas.store"
import { useColorsStore } from "../../../../../store/colors.store"

import { getColorInUse } from "../../../../../utilities/getColorInUse"

import { colorButton } from "../../../../../styled-components/components/colorButton/colorButton.styled.component"
import { useEffect } from "react";


export const Pixel = ({pixelColor}) =>{
    const [backgroundColor, setBackgroundColor] = useState('')

    useEffect(() =>{
        setBackgroundColor(pixelColor)
    }, [pixelColor])

    const pointer = useCanvasStore(state => state.pointer)
    const currentColors = useColorsStore(state => state.currentColors)

    const editPixel = (isActive, newBackgroundColor) => () =>{
        if (!isActive) return

        setBackgroundColor(newBackgroundColor)
    }

    return(
        <Button
            onPointerDown = {editPixel(true, getColorInUse(currentColors, pointer.button))}
            onPointerOver = {editPixel(pointer.pressed, getColorInUse(currentColors, pointer.button))}
            $properties = {colorButton({$backgroundColor : backgroundColor})}
        ></Button>
    )
}