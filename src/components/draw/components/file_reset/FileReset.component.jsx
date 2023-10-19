import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { fileResetStaticProperties } from './FileReset.staticProperties';

export const FileReset = () =>{

    const fileResetProperties = layout(fileResetStaticProperties)
    const buttonProperties = iconButton({});

    return(
        <Section id = 'file-reset' $properties = {fileResetProperties}>
            <Button id = 'reset-btn' $properties = {buttonProperties}>
                <FontAwesomeIcon icon = {faArrowsRotate} />
            </Button>
        </Section>
    );
}