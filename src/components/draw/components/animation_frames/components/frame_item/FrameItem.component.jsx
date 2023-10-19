import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';
import { checkBoardContainer } from '../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';
import { colorRectangle } from '../../../../../../styled-components/components/colorRectangle.styled.component';

import { frameContentStaticProperties, frameItemStaticProperties, itemNumberStaticProperties } from './FrameItem.staticProperties';

export const FrameItem = () =>{

    const frameItemProperties = layout(frameItemStaticProperties);
    const itemNumberProperties = colorRectangle(itemNumberStaticProperties);
    const frameContentProperties = checkBoardContainer(frameContentStaticProperties);

    return(
        <Li $properties = {frameItemProperties}>
            <Span $properties = {itemNumberProperties}>
                
            </Span>
            <Span $properties = {frameContentProperties}>

            </Span>
        </Li>
    );
}