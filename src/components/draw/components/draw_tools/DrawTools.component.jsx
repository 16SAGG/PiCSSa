import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faEyeDropper, faFill, faHand, faPencil, faSquare } from '@fortawesome/free-solid-svg-icons'

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { drawToolsStaticProperties } from './DrawTools.staticProperties';

export const DrawTools = () =>{

    const drawToolsProperties = Object.assign({}, drawToolsStaticProperties, {});

    return(
        <Section id = 'draw-tools' $properties = {layout(drawToolsProperties)}>
            <Button $properties = {flat({})}>
                <FontAwesomeIcon icon = {faPencil} transform = "grow-10" />
            </Button>
            <Button $properties = {flat({})}>
                <FontAwesomeIcon icon = {faHand} transform = "grow-10" />
            </Button>
            <Button $properties = {flat({})}>
                <FontAwesomeIcon icon = {faFill} transform = "grow-10" />
            </Button>
            <Button $properties = {flat({})}>
                <FontAwesomeIcon icon = {faEyeDropper} transform = "grow-10" />
            </Button>
            <Button $properties = {flat({})}>
                <FontAwesomeIcon icon = {faSquare} transform = "grow-10" />
            </Button>
            <Button $properties = {flat({})}>
                <FontAwesomeIcon icon = {faEraser} transform = "grow-10" />
            </Button>
        </Section>
    );
}