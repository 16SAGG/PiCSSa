import PropTypes from 'prop-types';

import { Button } from "clean-styled-components/src/styled-components/elements/Button.styled.element"
import { Li } from "clean-styled-components/src/styled-components/elements/Li.styled.element"

import { iconButton } from "../../../../../../../../styled-components/components/iconButton/iconButton.styled.component"

import { buttonStaticProperties } from "./DropButton.staticProperties"

export const DropButton = ({value, onPointerDown}) =>{
    
    const buttonProperties = iconButton(buttonStaticProperties)

    return(
        <Li>
            <Button
                onPointerDown = {onPointerDown}
                $properties = {buttonProperties}
            >
                {value}
            </Button>
        </Li>
    )
}

DropButton.propTypes = {
    value : PropTypes.string,
    onPointerDown : PropTypes.func,
}