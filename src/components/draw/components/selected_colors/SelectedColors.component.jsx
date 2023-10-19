import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { colorRectangle } from '../../../../styled-components/components/colorRectangle.styled.component';
import { checkBoardContainer } from '../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';

import { colorRectangleStaticProperties, primaryColorContainerStaticProperties, secondaryColorContainerStaticProperties, selectedColorsStaticProperties } from './SelectedColors.staticProperties';

export const SelectedColors = () =>{
    
    const selectedColorsProperties = layout(selectedColorsStaticProperties);
    
    const primaryColorSolidLayerProperties = colorRectangle(primaryColorContainerStaticProperties);
    const primaryColorContainerProperties = checkBoardContainer(primaryColorContainerStaticProperties);
    const primaryColorProperties = colorRectangle(colorRectangleStaticProperties({$backgroundColor : undefined}));
    
    const secondaryColorContainerProperties = checkBoardContainer(secondaryColorContainerStaticProperties);
    const secondaryColorProperties = colorRectangle(colorRectangleStaticProperties({$backgroundColor : undefined}));

    return(
        <Section id = 'selected-colors' $properties = {selectedColorsProperties}>
            <Div $properties = {primaryColorSolidLayerProperties}></Div>
            <Div id = 'primary-color-container' $properties = {primaryColorContainerProperties}>
                <Div id = 'primary-color' $properties = {primaryColorProperties}></Div>
            </Div>
            <Div id = 'secondary-color-container' $properties = {secondaryColorContainerProperties}>
                <Div id = 'secondary-color' $properties = {secondaryColorProperties}></Div>
            </Div>
        </Section>
    );
}