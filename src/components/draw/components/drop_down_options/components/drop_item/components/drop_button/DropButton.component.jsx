import PropTypes from 'prop-types';

export const DropButton = ({value, onPointerDown}) =>{
    return(
        <li>
            <button
                onPointerDown = {onPointerDown}
                className='
                    flex
                    items-center
                    text-center
                    min-w-[144px]
                    min-h-[24px]
                    pl-[12px]
                    text-[rgba(250,250,250,0.5)]
                    bg-[rgb(31,31,31)]
                    duration-300

                    hover:bg-[rgb(255,183,77)]
                    hover:text-[rgb(31,31,31)]
                '
            >
                {value}
            </button>
        </li>
    )
}

DropButton.propTypes = {
    value : PropTypes.string,
    onPointerDown : PropTypes.func,
}