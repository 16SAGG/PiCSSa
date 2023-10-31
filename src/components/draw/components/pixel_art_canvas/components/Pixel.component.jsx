import PropTypes from 'prop-types';

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { useToolsStore } from "../../../../../store/tools/tools.store";
import { useColorsStore } from "../../../../../store/colors.store"

import { colorButton } from "../../../../../styled-components/components/colorButton/colorButton.styled.component"

export const Pixel = ({pixelCoord, pointer, backgroundColor}) =>{

    const currentTool = useToolsStore(state => state.currentTool)
    const toolsList = useToolsStore(state => state.toolsList)
    const handleTool = toolsList[currentTool].function

    const currentColors = useColorsStore(state => state.currentColors)
    const setCurrentColors = useColorsStore(state => state.setCurrentColors)

    const toolPreviousArguments = {
        pixelCoord,
        currentColors,
        backgroundColor,
        setCurrentColors,
    }

    const handleEvents = (oldPointer, toolPreviousArguments) => (event) =>{
        const pointer = handlePointer(event, oldPointer)
       
        const toolArguments = {
            ...toolPreviousArguments,
            pointer
        }

        handleTool(event, toolArguments)
    }

    const handlePointer = (event, oldPointer) =>{
        const pointerIsOver = event.type === 'pointerover'
        if (pointerIsOver) return oldPointer

        return {
            isPressed : true,
            buttonThatIsPressed : event.button
        }
    }

    return(
        <Button
            id = {`${pixelCoord.x}: ${pixelCoord.y}`}
            className = 'pixel'
            onPointerDown = {handleEvents(pointer, toolPreviousArguments)}
            onPointerOver = {handleEvents(pointer, toolPreviousArguments)}
            $properties = {colorButton({$backgroundColor : backgroundColor})}
        ></Button>
    )
}

Pixel.propTypes = {
    pixelCoord : PropTypes.object,
    pointer : PropTypes.object,
    backgroundColor: PropTypes.string,
}