import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faEyeDropper, faFill, faHand, faPencil, faSquare } from '@fortawesome/free-solid-svg-icons'

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';

import { drawToolsStaticProperties } from './DrawTools.staticProperties';

export const DrawTools = () =>{

    const drawToolsProperties = layout(drawToolsStaticProperties);
    const toolProperties = iconButton({});

    return(
        <Section id = 'draw-tools' $properties = {drawToolsProperties}>
            <Button $properties = {toolProperties}>
                <FontAwesomeIcon icon = {faPencil} transform = "grow-10" />
            </Button>
            <Button $properties = {toolProperties}>
                <FontAwesomeIcon icon = {faHand} transform = "grow-10" />
            </Button>
            <Button $properties = {toolProperties}>
                <FontAwesomeIcon icon = {faFill} transform = "grow-10" />
            </Button>
            <Button $properties = {toolProperties}>
                <FontAwesomeIcon icon = {faEyeDropper} transform = "grow-10" />
            </Button>
            <Button $properties = {toolProperties}>
                <FontAwesomeIcon icon = {faSquare} transform = "grow-10" />
            </Button>
            <Button $properties = {toolProperties}>
                <FontAwesomeIcon icon = {faEraser} transform = "grow-10" />
            </Button>
        </Section>
    );
}