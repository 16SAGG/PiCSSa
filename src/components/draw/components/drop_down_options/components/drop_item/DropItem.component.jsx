import PropTypes from 'prop-types';

import { DropNumberInput } from './components/drop_number_input/DropNumberInput.component';
import { DropButton } from './components/drop_button/DropButton.component';
import { DropBreak } from './components/drop_break/DropBreak.component';

const itemTypes = {}

export const DropItem = ({props}) =>{
    return itemTypes[props.type](props)
}

itemTypes.numberInput = ({
    value = 0, 
    onPlusPointerDown = () =>{},
    onMinusPointerDown = () =>{}
}) => <DropNumberInput value = {value} onPlusPointerDown = {onPlusPointerDown} onMinusPointerDown = {onMinusPointerDown}/>

itemTypes.button = ({
    value = '',
    onPointerDown = ()=>{}
}) => <DropButton value = {value} onPointerDown = {onPointerDown}/>

itemTypes.break = () => <DropBreak/>

DropItem.propTypes = {
    type : PropTypes.string,
}