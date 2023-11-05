import { useState } from 'react';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { useCanvasStore } from '../../../../store/canvas.store';
import { useFramesStore } from '../../../../store/frames.store';

import { checkBoardContainer } from '../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';

import { Pixel } from './components/Pixel.component';

import { canvasStaticProperties } from './PixelArtCanvas.staticProperties';

const BUTTONS_POINTER_ENTER_TO_BUTTONS_POINTER_DOWN_UP = {
    '1' : 0,
    '2' : 2,
}

export const PixelArtCanvas = () =>{
    const canvasDimensions = useCanvasStore(state => state.canvasDimensions)
    
    const [pointer, setPointer] = useState({
        isPressed : false,
        buttonThatIsPressed : -1,
    })

    const framesList = useFramesStore(state => state.framesList)
    const currentFrame = useFramesStore(state => state.currentFrame)
    const frameInfo = (framesList[currentFrame]) ? framesList[currentFrame] : [[]]
    const editFrame = useFramesStore(state => state.editFrame)

    const pixels = document.getElementsByClassName('pixel')
    
    const handlePointerDown = (event) => {
        setPointer({isPressed : true, buttonThatIsPressed : event.button})
    }

    const handlerPointerEnter = (event) => {
        setPointer({
            isPressed : event.buttons > 0, 
            buttonThatIsPressed : BUTTONS_POINTER_ENTER_TO_BUTTONS_POINTER_DOWN_UP[event.buttons]
        })
    }

    const endPointerAction =  (pixels, frameInfo, editFrame) => () => {
        setPointer({isPressed : false, buttonThatIsPressed : -1})
        updateFrameInfo(pixels, frameInfo, editFrame)
    }

    const canvasProperties = checkBoardContainer(canvasStaticProperties({
        $pixelSize : canvasDimensions.pixelSize,
        $columnsCount : canvasDimensions.columnsCount,
        $rowsCount : canvasDimensions.rowsCount,
    }));

    return(
        <Section 
            id = 'canvas' 
            
            onPointerDown = {handlePointerDown}
            onPointerEnter = {handlerPointerEnter}
            onPointerUp = {endPointerAction(pixels, frameInfo, editFrame)}
            onPointerLeave = {endPointerAction(pixels, frameInfo, editFrame)}
            
            onContextMenu = {(event) => event.preventDefault()}
            
            $properties = {canvasProperties}
        >
            {frameInfo.map((row, indexY) => (
                row.map((pixelBackgroundColor, indexX) => (
                    <Pixel
                        key = {`${indexX}: ${indexY}`}
                        pixelCoord = {{x : indexX, y : indexY}}
                        pointer = {pointer}
                        backgroundColor = {pixelBackgroundColor}
                        frameInfo = {frameInfo}
                    />
                ))
            ))}
        </Section>
    );
}

const updateFrameInfo = (pixels, frameInfo, editFrame) => {
    const newFrameInfo = frameInfo.slice()
    for (let p = 0; p < pixels.length; p++){
        const pixelCoord = {
            x : (parseInt(pixels[p].id.split(': ')[0])),
            y : (parseInt(pixels[p].id.split(': ')[1])),
        }

        const pixelBackgroundColorIsNotEmpty = pixels[p].style.backgroundColor != ''
        if (pixelBackgroundColorIsNotEmpty) {
            newFrameInfo[pixelCoord.y][pixelCoord.x] = pixels[p].style.backgroundColor
            pixels[p].style.backgroundColor = ''
        }
    }

    editFrame(newFrameInfo)
}