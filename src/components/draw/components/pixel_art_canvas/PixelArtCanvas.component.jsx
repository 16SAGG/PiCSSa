import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { useCanvasStore } from '../../../../store/canvas.store';
import { useFramesStore } from '../../../../store/frames.store';

import { checkBoardContainer } from '../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';

import { canvasStaticProperties } from './PixelArtCanvas.staticProperties';
import { Pixel } from './components/Pixel.component';

export const PixelArtCanvas = () =>{
    const canvasDimensions = useCanvasStore(state => state.canvasDimensions)
    const setPointer = useCanvasStore(state => state.setPointer)

    const framesList = useFramesStore(state => state.framesList)
    const currentFrame = useFramesStore(state => state.currentFrame)
    const frameInfo = (framesList[currentFrame]) ? framesList[currentFrame] : [[]]
    
    const canvasProperties = checkBoardContainer(canvasStaticProperties({
        $pixelSize : canvasDimensions.pixelSize,
        $columnsCount : canvasDimensions.columnsCount,
        $rowsCount : canvasDimensions.rowsCount,
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
                row.map((pixelBackgroundColor, indexX) => (
                    <Pixel
                        key = {`${indexX}: ${indexY}`}
                        externalBackgroundColor = {pixelBackgroundColor}
                    />
                ))
            ))}
        </Section>
    );
}