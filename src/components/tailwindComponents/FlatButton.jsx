import PropTypes from 'prop-types'

export const FlatButton = ({onPointerDown = ()=>{}, content, focus = false}) =>{
    return(
        (!focus) ?
            <button
                onPointerDown={onPointerDown} 
                className="
                    min-h-[48px]
                    min-w-[48px]
                    text-[rgba(250,250,250,0.5)]
                    bg-[rgb(31,31,31)]
                    duration-300

                    hover:bg-[rgb(20,20,20)]
                    hover:text-[rgba(250,250,250,1)]
                "
            >
                {content}
            </button>
        :
            <button
                onPointerDown={onPointerDown} 
                className="
                    min-h-[48px]
                    min-w-[48px]
                    text-[rgb(31,31,31)]
                    bg-[rgb(255,183,77)]
                "
            >
                {content}
            </button>
    )
}

FlatButton.propTypes = {
    onPointerDown : PropTypes.func,
    content : PropTypes.object,
    focus : PropTypes.bool,
}