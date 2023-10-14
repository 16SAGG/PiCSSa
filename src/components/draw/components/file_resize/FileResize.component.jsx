import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { fileResizeStaticProperties } from './FileResize.staticProperties';

export const FileResize = () =>{

    const fileResizeProperties = Object.assign({}, fileResizeStaticProperties, {})

    return(
        <Section id = 'file-resize' $properties = {layout(fileResizeProperties)}>
            <Button id = 'resize-width-btn' $properties = {flat({})}>
                <FontAwesomeIcon icon={faArrowsLeftRight} />
            </Button>
            <Button id = 'resize-height-btn' $properties = {flat({})}>
                <FontAwesomeIcon icon={faArrowsLeftRight} style={{transform: 'rotate(90deg)'}}/>
            </Button>
        </Section>
    );
}