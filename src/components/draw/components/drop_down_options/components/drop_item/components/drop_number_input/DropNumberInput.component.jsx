import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

export const DropNumberInput = ({
    value = 0, 
    onPlusPointerDown = () =>{},
    onMinusPointerDown = () =>{},
}) =>{

    return(
        <li 
            className='
                flex
                border-none
                min-h-[48px]
                min-w-[72px]
            '
        >
            <div 
                className='
                    flex
                    text-center
                    p-0
                    grow
                    items-center
                    justify-center
                    border-2
                    border-[rgb(31,31,31)]
                '
            >
                <div
                    className='
                        text-[rgb(250,250,250)]
                        
                    '
                >
                    {value}
                </div>
            </div>
            <div
                className='
                    flex
                    flex-col
                '
            >
                <button
                    onPointerDown = {onPlusPointerDown}
                    className='
                        bg-[rgb(31,31,31)]
                        text-[rgba(250,250,250,0.5)]
                        min-w-[24px]
                        min-h-[24px]

                        hover:bg-[rgb(255,183,77)]
                        hover:text-[rgb(31,31,31)]
                    '
                >
                    <FontAwesomeIcon icon={faPlus} className = "fa-sm"/>
                </button>
                <button
                    onPointerDown = {onMinusPointerDown} 
                    className='
                        bg-[rgb(31,31,31)]
                        text-[rgba(250,250,250,0.5)]
                        min-w-[24px]
                        min-h-[24px]

                        hover:bg-[rgb(255,183,77)]
                        hover:text-[rgb(31,31,31)]
                    '
                >
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
            </div>
        </li>
    )
}

DropNumberInput.propTypes = {
    value : PropTypes.number,
    onPlusPointerDown : PropTypes.func,
    onMinusPointerDown : PropTypes.func
}