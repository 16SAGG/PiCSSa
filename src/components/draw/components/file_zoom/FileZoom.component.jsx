import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { fileZoomStaticProperties } from './FileZoom.staticProperties';

export const FileZoom = () =>{

    const fileZoomProperties = Object.assign({}, fileZoomStaticProperties, {})

    return(
        <Section id = 'file-zoom' $properties = {layout(fileZoomProperties)}>
            <Button id = 'zoom-in-btn' $properties = {flat({})}>
                <FontAwesomeIcon icon={faMagnifyingGlassPlus}/>
            </Button>
            <Button id = 'zoom-out-btn' $properties = {flat({})}>
                <FontAwesomeIcon icon={faMagnifyingGlassMinus}/>
            </Button>
        </Section>
    );
}