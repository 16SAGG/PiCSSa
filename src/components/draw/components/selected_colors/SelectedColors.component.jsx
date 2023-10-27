import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { selectedColorsStaticProperties } from './SelectedColors.staticProperties';
import { ColorContainer } from './components/ColorContainer/ColorContainer.component';
import { useColorsStore } from '../../../../store/colors.store';

export const SelectedColors = () =>{
    const currentColors = useColorsStore(state => state.currentColors)
    
    const selectedColorsProperties = layout(selectedColorsStaticProperties);
    
    return(
        <Section id = 'selected-colors' $properties = {selectedColorsProperties}>
            <ColorContainer
                backgroundColor = {currentColors.primary}
                gridColumn = '1 / span 2'
                gridRow = '1 / span 2'
                zIndex = '1'
           />
           <ColorContainer
                backgroundColor = {currentColors.secondary}
                gridColumn = '2 / span 3'
                gridRow = '2 / span 3'
                zIndex = {undefined}
           />
        </Section>
    );
}