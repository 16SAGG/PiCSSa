import PropTypes from 'prop-types';

import { Button } from "clean-styled-components/src/styled-components/elements/Button.styled.element"
import { Span } from "clean-styled-components/src/styled-components/elements/Span.styled.element"

import { useFramesStore } from '../../../../../../../../store/frames.store';

import { paletteRGBA } from '../../../../../../../../themes';

import { text } from '../../../../../../../../styled-components/components/text/text.styled.component';
import { layout } from '../../../../../../../../styled-components/components/layout/layout.styled.component';

import { IDContainerStaticProperties } from './IDContainer.staticProperties';

export const IDContainer = ({framePosition, isTheCurrentFrame}) =>{
    const setCurrentFrame = useFramesStore(state => state.setCurrentFrame)

    const IDContainerProperties = layout(IDContainerStaticProperties({
        $backgroundColor : (isTheCurrentFrame) ? paletteRGBA().theme_1.secondary : undefined
    }));

    const IDProperties = text({
        $color : (isTheCurrentFrame) ? paletteRGBA().theme_1.onSecondary : undefined
    });

    return (
        <Button 
            onPointerDown = {() => setCurrentFrame(framePosition)}
            $properties = {IDContainerProperties}
        >
            <Span $properties = {IDProperties}>
                {framePosition}
            </Span>
        </Button>
    )
}

IDContainer.propTypes = {
    framePosition : PropTypes.number,
    isTheCurrentFrame : PropTypes.bool,
}
