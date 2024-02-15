import PropTypes from 'prop-types';

export const RangeInput = ({inputValue="", setInputValue=()=>{}, textContent=""})=>{
    return(
        <div
            className="
                flex
                gap-0
                grow
                items-center
                opacity-50
                duration-300

                hover:opacity-100
            "
        >
            <input
                type="range"
                min={1}
                max={24}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                className='
                    grow
                '
            />
            <span
                className="
                    text-xs
                    min-w-[72px]
                    text-center
                "
            >
                {textContent}
            </span>
        </div>
    )
}

RangeInput.propTypes = {
    inputValue : PropTypes.string,
    setInputValue : PropTypes.func,
    textContent : PropTypes.string,
}