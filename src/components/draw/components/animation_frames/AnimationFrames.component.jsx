import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

import { Section } from "clean-styled-components/src/styled-components/elements/Section.styled.element";
import { Ul } from 'clean-styled-components/src/styled-components/elements/Ul.styled.element';
import { Button } from "clean-styled-components/src/styled-components/elements/Button.styled.element";

import { useFramesStore } from '../../../../store/frames.store';
import { useCanvasStore } from '../../../../store/canvas.store';

import { layout } from "../../../../styled-components/components/layout/layout.styled.component";
import { scroll } from "../../../../styled-components/components/scroll/scroll.styled.component";
import { iconButton } from "../../../../styled-components/components/iconButton/iconButton.styled.component";

import { addFrameButtonStaticProperties, animationFramesStaticProperties, framesListStaticProperties } from "./AnimationFrames.staticProperties";

import { FrameItem } from "./components/frame_item/FrameItem.component";

export const AnimationFrames = () =>{
    const newFrame = useFramesStore(state => state.newFrame)
    
    const columnsCount = useCanvasStore(state => state.columnsCount)
    const rowsCount = useCanvasStore(state => state.rowsCount)

    const animationFramesProperties = layout(animationFramesStaticProperties);
    const framesListProperties = scroll(framesListStaticProperties);
    const addFrameButtonProperties = iconButton(addFrameButtonStaticProperties);

    return(
        <Section id = 'animation-frames' $properties = {animationFramesProperties}>
            <Ul id = 'frames-list' $properties = {framesListProperties}>
                <FrameItem/>
                <FrameItem/>
                <FrameItem/>
                <FrameItem/>
                <FrameItem/>
                <FrameItem/>
                <FrameItem/>
                <FrameItem/>
            </Ul>
            <Button $properties = {addFrameButtonProperties} onClick = {() => newFrame({columnsCount, rowsCount})}>
                <FontAwesomeIcon icon={faPlus} transform = "grow-10"/>
            </Button>
        </Section>
    );
}