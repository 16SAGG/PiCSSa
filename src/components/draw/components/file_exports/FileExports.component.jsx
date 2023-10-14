import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { fileExportsStaticProperties } from './FileExports.staticProperties';

export const FileExports= () =>{

    const fileExportProperties = Object.assign({}, fileExportsStaticProperties, {})

    return(
        <Section id = 'file-exports' $properties = {layout(fileExportProperties)}>
            <Button id = 'export-btn' $properties = {flat({})}>
                <FontAwesomeIcon icon = {faCss3Alt} />
            </Button>
        </Section>
    );
}