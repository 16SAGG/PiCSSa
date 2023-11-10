import PropTypes from 'prop-types';

import { faArrowDown, faArrowUp, faCopy, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button } from "clean-styled-components/src/styled-components/elements/Button.styled.element"
import { Span } from "clean-styled-components/src/styled-components/elements/Span.styled.element"

import { layout } from "../../../../../../../../styled-components/components/layout/layout.styled.component"
import { iconButton } from "../../../../../../../../styled-components/components/iconButton/iconButton.styled.component"

import { paletteRGBA, transparency } from "../../../../../../../../themes"

import { useFramesStore } from '../../../../../../../../store/frames.store';

import { buttonStaticProperties, buttonsContainerStaticProperties } from "./ButtonsContainer.staticProperties"

export const ButtonsContainer = ({isTheCurrentFrame, framePosition}) =>{
    const duplicateFrame = useFramesStore(state => state.duplicateFrame)
    const moveFrameTo = useFramesStore(state => state.moveFrameTo)
    const deleteFrame = useFramesStore(state => state.deleteFrame)

    const buttonsContainerProperties = layout(buttonsContainerStaticProperties);
    const buttonProperties = iconButton(buttonStaticProperties({
        $color : (isTheCurrentFrame) ? paletteRGBA().theme_1.secondary : undefined,
        $backgroundColor : (isTheCurrentFrame) ? paletteRGBA(transparency.medium).theme_1.primary : undefined,
    }));

    return (
        <Span $properties = {buttonsContainerProperties}>
            <Button 
                onPointerDown = {() => duplicateFrame(framePosition)}
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon = {faCopy}/>
            </Button>

            <Button
                onPointerDown = {() => moveFrameTo(framePosition, framePosition - 1)}
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon = {faArrowUp}/>
            </Button>

            <Button
                onPointerDown = {() => moveFrameTo(framePosition, framePosition + 1)}
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon = {faArrowDown}/>
            </Button>

            <Button 
                onPointerDown = {() => deleteFrame(framePosition)}
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon={faX}/>
            </Button>
        </Span>
    )
}

ButtonsContainer.propTypes = {
    isTheCurrentFrame : PropTypes.bool,
    framePosition : PropTypes.number,
}