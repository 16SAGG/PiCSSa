import { useState } from "react"
import PropTypes from 'prop-types';

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { useCanvasStore } from "../../../../../store/canvas.store"
import { useColorsStore } from "../../../../../store/colors.store"

import { getColorInUse } from "../../../../../utilities/getColorInUse"

import { colorButton } from "../../../../../styled-components/components/colorButton/colorButton.styled.component"
import { useEffect } from "react"


export const Pixel = ({externalBackgroundColor}) =>{
    const [backgroundColor, setBackgroundColor] = useState('')

    useEffect(() =>{
        setBackgroundColor(externalBackgroundColor)
    }, [externalBackgroundColor])

    const localBackgroundColorUpdate = (itCanBeUpdated, newBackgroundColor) => () =>{
        if (itCanBeUpdated) setBackgroundColor(newBackgroundColor)
    }

    const pointer = useCanvasStore(state => state.pointer)
    const currentColors = useColorsStore(state => state.currentColors)

    return(
        <Button
            onPointerDown = {localBackgroundColorUpdate(true, getColorInUse(currentColors, pointer.button))}
            onPointerOver = {localBackgroundColorUpdate(pointer.pressed, getColorInUse(currentColors, pointer.button))}
            $properties = {colorButton({$backgroundColor : backgroundColor})}
        ></Button>
    )
}

Pixel.propTypes = {
    externalBackgroundColor: PropTypes.string,
}