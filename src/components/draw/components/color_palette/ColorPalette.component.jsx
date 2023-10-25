import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Ul } from 'clean-styled-components/src/styled-components/elements/Ul.styled.element';
import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';

import { colorButton } from '../../../../styled-components/components/colorButton/colorButton.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { scroll } from '../../../../styled-components/components/scroll/scroll.styled.component';

import { colorItemStaticProperties, colorListStaticProperties, colorPaletteStaticProperties } from './ColorPalette.staticProperties';

export const ColorPalette = () =>{

    const colorPaletteProperties = layout(colorPaletteStaticProperties);
    const colorListProperties = scroll(colorListStaticProperties);
    const colorItemProperties = colorButton(colorItemStaticProperties);

    return(
        <Section id = 'color-palette' $properties = {colorPaletteProperties}>
            <Ul id = 'color-list' $properties = {colorListProperties}>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
                <Li $properties = {colorItemProperties}></Li>
            </Ul>
        </Section>
    );
}