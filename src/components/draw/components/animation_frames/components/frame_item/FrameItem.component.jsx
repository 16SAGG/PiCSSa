import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowUp, faArrowDown, faX} from '@fortawesome/free-solid-svg-icons'

import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';
import { checkBoardContainer } from '../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';
import { text } from '../../../../../../styled-components/components/text/text.styled.component';
import { iconButton } from '../../../../../../styled-components/components/iconButton/iconButton.styled.component';

import { buttonsContainerStaticProperties, buttonStaticProperties, contentStaticProperties, frameItemStaticProperties, IDContainerStaticProperties, columnsWrapperStaticProperties } from './FrameItem.staticProperties';
import { paletteRGBA, transparency } from '../../../../../../themes';

export const FrameItem = ({frameID, isTheCurrentFrame}) =>{

    const frameItemProperties = layout(frameItemStaticProperties);
    
    const columnsWrapperProperties = layout(columnsWrapperStaticProperties);
    
    const IDContainerProperties = layout(IDContainerStaticProperties);
    const IDProperties = text({});
    
    const buttonsContainerProperties = layout(buttonsContainerStaticProperties);
    const buttonProperties = iconButton(buttonStaticProperties);

    const contentProperties = checkBoardContainer(contentStaticProperties({
        $borderColor : (isTheCurrentFrame) ? paletteRGBA('1').theme_1.onPrimary : undefined,
        $opacity : (isTheCurrentFrame) ? transparency.medium : undefined,
        $hoverOpacity : (isTheCurrentFrame) ? transparency.medium : undefined,
    }));

    return(
        <Li $properties = {frameItemProperties}>
            <Span $properties = {columnsWrapperProperties}>
                <Span $properties = {IDContainerProperties}>
                    <Span $properties = {IDProperties}>
                        {frameID}
                    </Span>
                </Span>

                <Span $properties = {buttonsContainerProperties}>
                    <Button $properties = {buttonProperties}>
                        <FontAwesomeIcon icon = {faCopy}/>
                    </Button>

                    <Button $properties = {buttonProperties}>
                        <FontAwesomeIcon icon = {faArrowUp}/>
                    </Button>

                    <Button $properties = {buttonProperties}>
                        <FontAwesomeIcon icon = {faArrowDown}/>
                    </Button>

                    <Button $properties = {buttonProperties}>
                        <FontAwesomeIcon icon={faX}/>
                    </Button>
                </Span>
            </Span>

            <Span $properties = {contentProperties}>

            </Span>
        </Li>
    );
}

FrameItem.propTypes = {
    frameID : PropTypes.number,
    isTheCurrentFrame : PropTypes.bool,
}