import { useState } from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DropItem } from './components/drop_item/DropItem.component';
import { FlatButton } from '../../../tailwindComponents/flatButton';

export const DropDownOptions = ({icon, options, directionLeft = false}) =>{
    const [showContentDisplay, setShowContentDisplay] = useState(false)

    return (
        (!directionLeft) ?
            <div>
                <FlatButton
                    onPointerDown={()=> setShowContentDisplay(!showContentDisplay)}
                    content={<FontAwesomeIcon icon={icon.value} style={icon.style}/>}
                    focus={showContentDisplay}
                />
                {(showContentDisplay) ?
                    <ul
                        className='
                            flex
                            flex-col
                            bg-[rgb(20,20,20)]
                            list-none
                            px-0
                            py-[6px]
                            my-0
                            absolute
                            z-20
                        '
                    >
                        {options.map((option, index) =>
                            <DropItem
                                props = {option}
                                key = {index}
                            />
                        )}
                    </ul>
                    :
                    <ul></ul>
                }
            </div>
        :
            <div>
            <FlatButton
                onPointerDown={()=> setShowContentDisplay(!showContentDisplay)}
                content={<FontAwesomeIcon icon={icon.value} style={icon.style}/>}
                focus={showContentDisplay}
            />
            {(showContentDisplay) ?
                <ul
                    className='
                        flex
                        flex-col
                        bg-[rgb(20,20,20)]
                        list-none
                        px-0
                        py-[6px]
                        my-0
                        absolute
                        z-20
                        translate-x-[-96px]
                    '
                >
                    {options.map((option, index) =>
                        <DropItem
                            props = {option}
                            key = {index}
                        />
                    )}
                </ul>
                :
                <ul></ul>
            }
            </div>
    )
}

DropDownOptions.propTypes = {
    icon : PropTypes.object,
    options : PropTypes.array,
    directionLeft : PropTypes.bool,
}