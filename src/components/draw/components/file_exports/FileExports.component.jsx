import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { fileExportsStaticProperties } from './FileExports.staticProperties';

export const FileExports= () =>{

    const fileExportProperties = layout(fileExportsStaticProperties);
    const buttonProperties = iconButton({});

    return(
        <Section id = 'file-exports' $properties = {fileExportProperties}>
            <Button id = 'export-btn' $properties = {buttonProperties}>
                <FontAwesomeIcon icon = {faCss3Alt} />
            </Button>
        </Section>
    );
}