import PropTypes from 'prop-types';

import { Div } from "clean-styled-components/src/styled-components/elements/Div.styled.element"

import { useFramesStore } from '../../../../../../../../store/frames.store';
import { useCanvasStore } from '../../../../../../../../store/canvas.store';

import { keepThePixelArtAspectRatio } from '../../../../../../../../utilities/keepThePixelArtAspectRatio';

import { layout } from "../../../../../../../../styled-components/components/layout/layout.styled.component"
import { checkBoardContainer } from "../../../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component";

import { contentStaticProperties, previewerStaticProperties } from './Content.staticProperties';


export const Content = ({fileName, frameID}) =>{
    const canvasDimensions = useCanvasStore(state => state.canvasDimensions)

    const setCurrentFrame = useFramesStore(state => state.setCurrentFrame)

    const paddingsAspectRatio = keepThePixelArtAspectRatio(
        canvasDimensions.columnsCount, 
        canvasDimensions.rowsCount
    )
    
    const contentProperties = checkBoardContainer(contentStaticProperties);
    const previewerProperties = layout(previewerStaticProperties({
        $paddingTop : `${paddingsAspectRatio.height}%`,
        $paddingBottom : `${paddingsAspectRatio.height}%`,
        $paddingLeft : `${paddingsAspectRatio.width}%`,
        $paddingRight : `${paddingsAspectRatio.width}%`,
    }))

    return(
        <Div 
            onPointerDown = {() => setCurrentFrame(frameID)}
            $properties = {contentProperties}
        >
            <Div
                $properties = {previewerProperties}
            >
                <Div className = {`${fileName}_${frameID}`}></Div>
            </Div>
        </Div>
    )
}

Content.propTypes = {
    frameID : PropTypes.number,
    fileName : PropTypes.string,
}
