import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { useToolsStore } from '../../../../store/tools/tools.store';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';

import { drawToolsStaticProperties } from './DrawTools.staticProperties';
import { paletteRGBA } from '../../../../themes';

export const DrawTools = () =>{
    const currentTool = useToolsStore(state => state.currentTool)
    const setCurrentTool = useToolsStore(state => state.setCurrentTool)
    const toolsList = useToolsStore(state => state.toolsList)

    const drawToolsProperties = layout(drawToolsStaticProperties);

    return(
        <Section id = 'draw-tools' $properties = {drawToolsProperties}>
            {toolsList.map((tool, index) => (
                <Button 
                    key = {index}
                    onPointerDown = {() => setCurrentTool(index)}
                    $properties = {iconButton({$color : (currentTool === index) ? paletteRGBA('1').theme_1.secondary : undefined})}
                >
                    <FontAwesomeIcon icon = {tool.icon} transform = "grow-10" />
                </Button>
            ))}
        </Section>
    );
}