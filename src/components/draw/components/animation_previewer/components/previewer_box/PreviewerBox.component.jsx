import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';

import { useFramesStore } from '../../../../../../store/frames.store';
import { useCanvasStore } from '../../../../../../store/canvas.store';
import { useFileStore } from '../../../../../../store/file.store';
import { useAnimationStore } from '../../../../../../store/animation.store';

import { checkBoardContainer } from '../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';

import { convertPixelArtAnimationToCSS, convertPixelArtSingleToCSS } from '../../../../../../utilities/convertPixelArtToCSS';
import { adaptPixelSizeToPreviewSize } from '../../../../../../utilities/adaptPixelSizeToPreviewSize';
import { keepThePixelArtAspectRatio } from '../../../../../../utilities/keepThePixelArtAspectRatio';

import { size } from '../../../../../../themes';

import { previewerBoxStaticProperties } from './PreviewerBox.staticProperties';

export const PreviewerBox = () =>{
    const framesList = useFramesStore(state => state.framesList)
    const currentFrame = useFramesStore(state => state.currentFrame)

    const canvasDimensions = useCanvasStore(state => state.canvasDimensions)

    const fileName = useFileStore(state => state.fileName)

    const animationIsPlaying = useAnimationStore(state => state.animationIsPlaying)
    const FPS = useAnimationStore(state => state.FPS)

    const thereIsMoreThanOneFrame = framesList.length > 1

    const pixelSize = adaptPixelSizeToPreviewSize(
        parseFloat(size.box)*5, 
        canvasDimensions.columnsCount, 
        canvasDimensions.rowsCount
    )

    const paddingsAspectRatio = keepThePixelArtAspectRatio(
        canvasDimensions.columnsCount, 
        canvasDimensions.rowsCount
    )

    const previewerBoxProperties = checkBoardContainer(previewerBoxStaticProperties({
        $paddingTop : `${paddingsAspectRatio.height}%`,
        $paddingBottom : `${paddingsAspectRatio.height}%`,
        $paddingLeft : `${paddingsAspectRatio.width}%`,
        $paddingRight : `${paddingsAspectRatio.width}%`,
    }))

    return(
        <>
            <style>
                {
                    (thereIsMoreThanOneFrame && animationIsPlaying) ?
                        convertPixelArtAnimationToCSS(framesList, fileName, pixelSize, 1/FPS)
                    :
                        convertPixelArtSingleToCSS(framesList[currentFrame], fileName, pixelSize)
                }
            </style>
            <Div 
                id = 'previewer-box'
                $properties = {previewerBoxProperties} 
            >
                <Div className = {fileName}></Div>
            </Div>
        </>
    );
}