import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Input } from 'clean-styled-components/src/styled-components/elements/Input.styled.element';

import { textInput } from '../../../../styled-components/components/textInput/textInput.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { fileNameInputStaticProperties, fileNameStaticProperties } from './FileName.staticProperties';

export const FileName = () =>{
    const fileNameProperties = layout(fileNameStaticProperties);
    const fileNameInputProperties = textInput(fileNameInputStaticProperties);
    
    return(
        <Section id = 'file-name' $properties = {fileNameProperties}>
            <Input id = 'file-name-input' type = 'text' $properties={fileNameInputProperties}/>
        </Section>
    );
}