import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { fileResetStaticProperties } from './FileReset.staticProperties';

export const FileReset = () =>{

    const fileResetProperties = Object.assign({}, fileResetStaticProperties, {})

    return(
        <Section id = 'file-reset' $properties = {layout(fileResetProperties)}>
            <Button id = 'reset-btn' $properties = {flat({})}>
                <FontAwesomeIcon icon = {faArrowsRotate} />
            </Button>
        </Section>
    );
}