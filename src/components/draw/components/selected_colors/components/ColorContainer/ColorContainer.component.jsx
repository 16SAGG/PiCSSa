import PropTypes from 'prop-types';

import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';

import { checkBoardContainer } from "../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component";
import { colorRectangle } from "../../../../../../styled-components/components/colorRectangle.styled.component";

import { colorContainerStaticProperties, colorStaticProperties } from "./ColorContainer.staticProperties";

export const ColorContainer = ({backgroundColor, gridColumn, gridRow, zIndex }) =>{
    const backLayerProperties = colorRectangle(colorContainerStaticProperties({
        $gridColumn : gridColumn,
        $gridRow : gridRow,
        $zIndex : zIndex,
    }));
    
    const colorContainerProperties = checkBoardContainer(colorContainerStaticProperties({
        $gridColumn : gridColumn,
        $gridRow : gridRow,
        $zIndex : zIndex,
    }));
    
    const colorProperties = colorRectangle(colorStaticProperties({
        $backgroundColor : backgroundColor,
    }));
    
    return (
        <>
            <Div $properties = {backLayerProperties}></Div>
            <Div $properties = {colorContainerProperties}>
                <Div $properties = {colorProperties}></Div>
            </Div>
        </>
    )
}

ColorContainer.propTypes = {
    backgroundColor: PropTypes.string,
    gridColumn : PropTypes.string,
    gridRow : PropTypes.string, 
    zIndex : PropTypes.string,
}