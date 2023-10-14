import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Input } from 'clean-styled-components/src/styled-components/elements/Input.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { fileNameInputStaticProperties, fileNameStaticProperties } from './FileName.staticProperties';

export const FileName = () =>{

    const fileNameProperties = Object.assign({}, fileNameStaticProperties, {})
    const fileNameInputProperties = Object.assign({}, fileNameInputStaticProperties, {})

    return(
        <Section id = 'file-name' $properties = {layout(fileNameProperties)}>
            <Input id = 'file-name-input' type = 'text' $properties={flat(fileNameInputProperties)}/>
        </Section>
    );
}