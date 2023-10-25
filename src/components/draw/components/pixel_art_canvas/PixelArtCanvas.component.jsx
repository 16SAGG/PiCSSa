import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { useCanvasStore } from '../../../../store/canvas.store';
import { useFramesStore } from '../../../../store/frames.store';

import { checkBoardContainer } from '../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';
import { colorButton } from '../../../../styled-components/components/colorButton/colorButton.styled.component';

import { canvasStaticProperties } from './PixelArtCanvas.staticProperties';

export const PixelArtCanvas = () =>{
    const pixelSize = useCanvasStore(state => state.pixelSize)
    const columnsCount = useCanvasStore(state => state.columnsCount)
    const rowsCount = useCanvasStore(state => state.rowsCount)
    const pointerPressed = useCanvasStore(state => state.pointerPressed)
    const setPointerPressed = useCanvasStore(state => state.setPointerPressed)

    const framesList = useFramesStore(state => state.framesList)
    const currentFrame = useFramesStore(state => state.currentFrame)
    const frameInfo = framesList[currentFrame]
    const editPixel = useFramesStore(state => state.editPixel)

    const canvasProperties = checkBoardContainer(canvasStaticProperties({
        $pixelSize : pixelSize,
        $columnsCount : columnsCount,
        $rowsCount : rowsCount,
    }));

    return(
        <Section 
            id = 'canvas' 
            onPointerDown = {() => setPointerPressed(true)}
            onPointerUp = {() => setPointerPressed(false)}
            $properties = {canvasProperties}
        >
            {frameInfo.map((row, indexY) => (
                row.map((pixelColor, indexX) => (
                    <Button
                        name = {`pixel ${indexX}: ${indexY}`}
                        key = {`${indexX}: ${indexY}`}
                        onPointerDown = {() => editPixel(true, {coordX : indexX, coordY : indexY}, '#000')}
                        onPointerOver = {() => editPixel(pointerPressed, {coordX : indexX, coordY : indexY}, '#000')}
                        $properties = {colorButton({$backgroundColor : pixelColor})}
                    >
                    </Button>
                ))
            ))}
        </Section>
    );
}