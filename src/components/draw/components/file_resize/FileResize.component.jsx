import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { fileResizeStaticProperties } from './FileResize.staticProperties';
import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';

export const FileResize = () =>{

    const fileResizeProperties = layout(fileResizeStaticProperties)
    const buttonProperties = iconButton({})

    return(
        <Section id = 'file-resize' $properties = {fileResizeProperties}>
            <Button id = 'resize-width-btn' $properties = {buttonProperties}>
                <FontAwesomeIcon icon={faArrowsLeftRight} />
            </Button>
            <Button id = 'resize-height-btn' $properties = {buttonProperties}>
                <FontAwesomeIcon icon={faArrowsLeftRight} style={{transform: 'rotate(90deg)'}}/>
            </Button>
        </Section>
    );
}