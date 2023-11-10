import { useState } from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Div } from "clean-styled-components/src/styled-components/elements/Div.styled.element"
import { Ul } from "clean-styled-components/src/styled-components/elements/Ul.styled.element"

import { paletteRGBA } from '../../../../themes';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';

import { buttonStaticProperties, contentStaticProperties } from './DropDownOptions.staticProperties';
import { DropItem } from './components/drop_item/DropItem.component';

export const DropDownOptions = ({icon, options}) =>{
    const [showContentDisplay, setShowContentDisplay] = useState(false)

    const contentProperties = layout(contentStaticProperties({$display : (showContentDisplay) ? 'flex' : 'none'}))
    const buttonProperties = (showContentDisplay) ? 
        iconButton(buttonStaticProperties({
            $backgroundColor : paletteRGBA().theme_1.secondary,
            $hoverBackgroundColor : paletteRGBA().theme_1.secondary,
            $opacity : '1',
            $color : paletteRGBA().theme_1.onSecondary,
            $hoverColor : paletteRGBA().theme_1.onSecondary
        }))
    :
        iconButton(buttonStaticProperties({}))

    return (
        <Div
            onPointerEnter = {() => setShowContentDisplay(true)}
            onPointerLeave = {() => setShowContentDisplay(false)}
        >
            <Button
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon={icon.value} style={icon.style}/>
            </Button>
            <Ul
                $properties = {contentProperties}
            >
                {options.map((option, index) =>
                    <DropItem
                        props = {option}
                        key = {index}
                    />
                )}
            </Ul>
        </Div>
    )
}

DropDownOptions.propTypes = {
    icon : PropTypes.object,
    options : PropTypes.array,
}