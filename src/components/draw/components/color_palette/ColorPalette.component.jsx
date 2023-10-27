import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Ul } from 'clean-styled-components/src/styled-components/elements/Ul.styled.element';
import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';

import { useColorsStore } from '../../../../store/colors.store';

import { colorButton } from '../../../../styled-components/components/colorButton/colorButton.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { scroll } from '../../../../styled-components/components/scroll/scroll.styled.component';

import { colorItemStaticProperties, colorListStaticProperties, colorPaletteStaticProperties } from './ColorPalette.staticProperties';

export const ColorPalette = () =>{
    const palettesList = useColorsStore(state => state.palettesList)
    const fetchPalettesList = useColorsStore(state => state.fetchPalettesList)
    const currentPalette = useColorsStore(state => state.currentPalette)

    const palettesListIsEmpty = palettesList.length === 0
    if (palettesListIsEmpty) {
        fetchPalettesList()
    }

    const paletteColors = (palettesList[currentPalette]) ? palettesList[currentPalette].colors : []
    
    const setCurrentColors = useColorsStore(state => state.setCurrentColors) 

    const colorPaletteProperties = layout(colorPaletteStaticProperties);
    const colorListProperties = scroll(colorListStaticProperties);

    return(
        <Section id = 'color-palette' $properties = {colorPaletteProperties}>
            <Ul 
                id = 'palette-colors'
                onContextMenu = {(event) => event.preventDefault()}
                $properties = {colorListProperties}
            >
                {paletteColors.map((color, index) => (
                    <Li key = {index}>
                        <Button
                            onPointerDown = {(event) => setCurrentColors(event.button, color)}
                            $properties = {colorButton(colorItemStaticProperties({$backgroundColor : color}))}
                        >
                        </Button>
                    </Li>
                ))}
            </Ul>
        </Section>
    );
}