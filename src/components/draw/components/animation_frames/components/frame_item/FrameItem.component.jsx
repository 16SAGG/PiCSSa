import PropTypes from 'prop-types';

import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';

import { useFramesStore } from '../../../../../../store/frames.store';
import { useFileStore } from '../../../../../../store/file.store';
import { useCanvasStore } from '../../../../../../store/canvas.store';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';

import { convertPixelArtSingleToCSS } from '../../../../../../utilities/convertPixelArtToCSS';
import { adaptPixelSizeToPreviewSize } from '../../../../../../utilities/adaptPixelSizeToPreviewSize';

import {border, size} from '../../../../../../themes';

import { frameItemStaticProperties, columnsWrapperStaticProperties } from './FrameItem.staticProperties';

import { ButtonsContainer } from './components/ButtonsContainer/ButtonsContainer.component';
import { IDContainer } from './components/IDContainer/IDContainer.component';
import { Content } from './components/Content/Content.component';

export const FrameItem = ({framePosition, isTheCurrentFrame}) =>{
    const framesList = useFramesStore(state => state.framesList)
    
    const fileName = useFileStore(state => state.fileName)

    const canvasDimensions = useCanvasStore(state => state.canvasDimensions)

    const pixelSize = adaptPixelSizeToPreviewSize(
        parseFloat(size.box)*2 - parseFloat(border.width.medium)*2, 
        canvasDimensions.columnsCount, 
        canvasDimensions.rowsCount
    )

    const frameItemProperties = layout(frameItemStaticProperties);
    
    const columnsWrapperProperties = layout(columnsWrapperStaticProperties);

    return(
        <>
            <style>
                {convertPixelArtSingleToCSS(framesList[framePosition], `${fileName}_${framePosition}`, pixelSize)}
            </style>

            <Li $properties = {frameItemProperties}>
                <Span $properties = {columnsWrapperProperties}>
                    <IDContainer
                        framePosition = {framePosition}
                        isTheCurrentFrame={isTheCurrentFrame}
                    />

                    <ButtonsContainer
                        framePosition = {framePosition}
                        isTheCurrentFrame = {isTheCurrentFrame}
                    />
                </Span>

                <Content
                    fileName = {fileName}
                    framePosition = {framePosition}
                />
            </Li>
        </>
    );
}

FrameItem.propTypes = {
    framePosition : PropTypes.number,
    isTheCurrentFrame : PropTypes.bool,
}