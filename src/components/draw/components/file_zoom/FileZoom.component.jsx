import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { fileZoomStaticProperties } from './FileZoom.staticProperties';
import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';

export const FileZoom = () =>{

    const fileZoomProperties = layout(fileZoomStaticProperties);
    const buttonProperties = iconButton({});

    return(
        <Section id = 'file-zoom' $properties = {fileZoomProperties}>
            <Button id = 'zoom-in-btn' $properties = {buttonProperties}>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus}/>
            </Button>
            <Button id = 'zoom-out-btn' $properties = {buttonProperties}>
                <FontAwesomeIcon icon={faMagnifyingGlassMinus}/>
            </Button>
        </Section>
    );
}