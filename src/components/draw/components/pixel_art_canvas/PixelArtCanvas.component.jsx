import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { useCanvasStore } from '../../../../store/canvas.store';
import { useColorsStore } from "../../../../store/colors.store"
import { useFramesStore } from '../../../../store/frames.store';

import { checkBoardContainer } from '../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';
import { colorButton } from '../../../../styled-components/components/colorButton/colorButton.styled.component';

import { canvasStaticProperties } from './PixelArtCanvas.staticProperties';
import { getColorInUse } from '../../../../utilities/getColorInUse';

export const PixelArtCanvas = () =>{
    const pixelSize = useCanvasStore(state => state.pixelSize)
    const columnsCount = useCanvasStore(state => state.columnsCount)
    const rowsCount = useCanvasStore(state => state.rowsCount)
    const pointer = useCanvasStore(state => state.pointer)
    const setPointer = useCanvasStore(state => state.setPointer)

    const framesList = useFramesStore(state => state.framesList)
    const currentFrame = useFramesStore(state => state.currentFrame)
    const frameInfo = (framesList[currentFrame]) ? framesList[currentFrame] : [[]]
    const editPixel = useFramesStore(state => state.editPixel)
    
    const currentColors = useColorsStore(state => state.currentColors)

    const canvasProperties = checkBoardContainer(canvasStaticProperties({
        $pixelSize : pixelSize,
        $columnsCount : columnsCount,
        $rowsCount : rowsCount,
    }));

    return(
        <Section 
            id = 'canvas' 
            onPointerDown = {(event) => setPointer({pressed : true, button : event.button})}
            onPointerUp = {(event) => setPointer({pressed : false, button : event.button})}
            onContextMenu = {(event) => event.preventDefault()}
            $properties = {canvasProperties}
        >
            {frameInfo.map((row, indexY) => (
                row.map((pixelColor, indexX) => (
                    <Button
                        name = {`pixel ${indexX}: ${indexY}`}
                        key = {`${indexX}: ${indexY}`}
                        onPointerDown = {() => editPixel(true, {coordX : indexX, coordY : indexY}, getColorInUse(currentColors, pointer.button))}
                        onPointerOver = {() => editPixel(pointer.pressed, {coordX : indexX, coordY : indexY}, getColorInUse(currentColors, pointer.button))}
                        $properties = {colorButton({$backgroundColor : pixelColor})}
                    >
                    </Button>
                ))
            ))}
        </Section>
    );
}