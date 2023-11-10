import PropTypes from 'prop-types';

import { Input } from 'clean-styled-components/src/styled-components/elements/Input.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';
import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { rangeInput } from '../../../../styled-components/components/rangeInput/rangeInput.styled.component';
import { text } from '../../../../styled-components/components/text/text.styled.component';

import { size } from '../../../../themes';

import { rangeContainerStaticProperties, rangeInputStaticProperties, valueCounterStaticProperties } from './RangeInput.staticProperties';

export const RangeInput = ({
    value, 
    setValue, 
    textContent, 
    gap = '0', 
    textAlign = 'center',
    textMinWidth = size.box,
}) =>{

    const rangeContainerProperties = layout(rangeContainerStaticProperties({
        $gap : gap,
    }))
    const rangeInputProperties = rangeInput(rangeInputStaticProperties)
    const valueCounterProperties = text(valueCounterStaticProperties({
        $textAlign : textAlign,
        $minWidth : textMinWidth,
    }))

    return(
        <Div $properties = {rangeContainerProperties}>
            <Input 
                type = 'range' 
                min = '1' max = '24' 
                value = {value}
                onChange = {(event) => setValue(event.target.value)}
                $properties = {rangeInputProperties}
            />
                        
            <Span $properties = {valueCounterProperties} className = 'small_text'>
                {textContent}
            </Span>
        </Div>
    )
}

RangeInput.propTypes = {
    value : PropTypes.string,
    setValue : PropTypes.func,
    textContent : PropTypes.string,
    gap : PropTypes.string,
    textAlign : PropTypes.string,
    textMinWidth : PropTypes.string,
}