import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Input } from 'clean-styled-components/src/styled-components/elements/Input.styled.element';

import { textInput } from '../../../../styled-components/components/textInput/textInput.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { useFileStore } from '../../../../store/file.store';

import { fileNameInputStaticProperties, fileNameStaticProperties } from './FileName.staticProperties';

export const FileName = () =>{
    const fileName = useFileStore(state => state.fileName)
    const setName = useFileStore(state => state.setName)

    const fileNameProperties = layout(fileNameStaticProperties);
    const fileNameInputProperties = textInput(fileNameInputStaticProperties);
    
    return(
        <Section id = 'file-name' $properties = {fileNameProperties}>
            <Input
                value = {fileName}
                type = 'text' 
                onChange = {(event) => setName(event.target.value)}
                $properties={fileNameInputProperties}
            />
        </Section>
    );
}