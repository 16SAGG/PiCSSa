import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowUp, faArrowDown, faX} from '@fortawesome/free-solid-svg-icons'

import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';
import { checkBoardContainer } from '../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';
import { text } from '../../../../../../styled-components/components/text/text.styled.component';

import { frameButtonsContainerStaticProperties, frameButtonStaticProperties, frameContentStaticProperties, frameItemStaticProperties, frameNumberContainerStaticProperties, frameOptionsStaticProperties } from './FrameItem.staticProperties';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { iconButton } from '../../../../../../styled-components/components/iconButton/iconButton.styled.component';

export const FrameItem = () =>{

    const frameItemProperties = layout(frameItemStaticProperties);
    const frameOptionsProperties = layout(frameOptionsStaticProperties);
    const frameNumberContainerProperties = layout(frameNumberContainerStaticProperties);
    const frameNumberProperties = text({});
    const frameContentProperties = checkBoardContainer(frameContentStaticProperties);
    const frameButtonsContainerProperties = layout(frameButtonsContainerStaticProperties);
    const frameButtonProperties = iconButton(frameButtonStaticProperties);

    return(
        <Li $properties = {frameItemProperties}>
            <Span $properties = {frameOptionsProperties}>
                <Span $properties = {frameNumberContainerProperties}>
                    <Span $properties ={frameNumberProperties}>
                        22
                    </Span>
                </Span>
                <Span $properties = {frameButtonsContainerProperties}>
                    <Button $properties = {frameButtonProperties}>
                        <FontAwesomeIcon icon = {faCopy}/>
                    </Button>
                    <Button $properties = {frameButtonProperties}>
                        <FontAwesomeIcon icon = {faArrowUp}/>
                    </Button>
                    <Button $properties = {frameButtonProperties}>
                        <FontAwesomeIcon icon = {faArrowDown}/>
                    </Button>
                    <Button $properties = {frameButtonProperties}>
                        <FontAwesomeIcon icon={faX}/>
                    </Button>
                </Span>
            </Span>
            <Span $properties = {frameContentProperties}>

            </Span>
        </Li>
    );
}