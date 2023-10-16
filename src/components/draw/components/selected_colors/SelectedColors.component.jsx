import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { flat } from '../../../../styled-components/components/flat/flat.styled.component';

import { primaryColorStaticProperties, secondaryColorStaticProperties, selectedColorsStaticProperties } from './SelectedColors.staticProperties';



export const SelectedColors = () =>{

    const selectedColorsProperties = Object.assign({}, selectedColorsStaticProperties, {})
    const primaryColorProperties = Object.assign({}, primaryColorStaticProperties, {})
    const secondaryColorProperties = Object.assign({}, secondaryColorStaticProperties, {})

    return(
        <Section id = 'selected-colors' $properties = {layout(selectedColorsProperties)}>
            <Div id = 'primary-color' $properties = {flat(primaryColorProperties)}></Div>
            <Div id = 'secondary-color' $properties = {flat(secondaryColorProperties)}></Div>
        </Section>
    );
}