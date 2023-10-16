import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTurnUp } from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Ul } from 'clean-styled-components/src/styled-components/elements/Ul.styled.element';
import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';

import { layout } from '../../../../styled-components/components/layout';
import { flat } from '../../../../styled-components/components/flat/flat.styled.component';
import { scroll } from '../../../../styled-components/components/scroll/scroll.styled.component';

import { colorItemStaticProperties, colorListStaticProperties, colorPaletteStaticProperties } from './ColorPalette.staticProperties';

export const ColorPalette = () =>{

    const colorPaletteProperties = Object.assign({}, colorPaletteStaticProperties, {});
    const colorListProperties = Object.assign({}, colorListStaticProperties, {});
    const colorItemProperties = Object.assign({}, colorItemStaticProperties, {
        $backgroundColor : '#fff', 
        $hoverBackgroundColor : '#fff',
    });

    return(
        <Section id = 'color-palette' $properties = {layout(colorPaletteProperties)}>
            <Ul id = 'color-list' $properties = {scroll(colorListProperties)}>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
                <Li $properties = {flat(colorItemProperties)}></Li>
            </Ul>
        </Section>
    );
}