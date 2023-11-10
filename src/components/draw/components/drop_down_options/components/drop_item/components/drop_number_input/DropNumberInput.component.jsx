import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import { Li } from "clean-styled-components/src/styled-components/elements/Li.styled.element"
import { Div } from "clean-styled-components/src/styled-components/elements/Div.styled.element"
import { Button } from "clean-styled-components/src/styled-components/elements/Button.styled.element"

import { iconButton } from "../../../../../../../../styled-components/components/iconButton/iconButton.styled.component"
import { layout } from "../../../../../../../../styled-components/components/layout/layout.styled.component"
import { text } from '../../../../../../../../styled-components/components/text/text.styled.component';

import { buttonContainerStaticProperties, buttonStaticProperties, numberDisplayerStaticProperties, numberInputContainerStaticProperties } from './DropNumberInput.staticProperties';

export const DropNumberInput = ({
    value = 0, 
    onPlusPointerDown = () =>{},
    onMinusPointerDown = () =>{},
}) =>{
    const numberInputContainerProperties = layout(numberInputContainerStaticProperties)
    const numberDisplayerProperties = layout(numberDisplayerStaticProperties)
    const buttonContainerProperties = layout(buttonContainerStaticProperties)
    const buttonProperties = iconButton(buttonStaticProperties)

    return(
        <Li $properties = {numberInputContainerProperties}>
            <Div 
                $properties = {numberDisplayerProperties}
            >
                <Div $properties = {text({})}>{value}</Div>
            </Div>
            <Div $properties = {buttonContainerProperties}>
                <Button onPointerDown = {onPlusPointerDown} $properties = {buttonProperties}>
                    <FontAwesomeIcon icon={faPlus} className = "fa-sm"/>
                </Button>
                <Button onPointerDown = {onMinusPointerDown} $properties = {buttonProperties}>
                    <FontAwesomeIcon icon={faMinus}/>
                </Button>
            </Div>
        </Li>
    )
}

DropNumberInput.propTypes = {
    value : PropTypes.number,
    onPlusPointerDown : PropTypes.func,
    onMinusPointerDown : PropTypes.func
}