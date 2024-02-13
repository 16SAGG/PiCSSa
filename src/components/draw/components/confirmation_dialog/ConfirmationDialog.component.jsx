import PropTypes from 'prop-types'

export const ConfirmationDialog = ({id, text, confirmPointerDown, cancelPointerDown}) =>{
    return (
        <dialog
            id = {id}
            className='
                bg-[rgb(31,31,31)]
                text-[rgb(250,250,250)]
                border-[rgb(250,250,250)]
                border-[5px]
                p-5
            '
        >
            <div
                className='
                    flex
                    flex-col
                    gap-6
                '
            >
                <p>{text}</p>

                <div
                    className='
                        flex
                        space-x-10
                        justify-center
                    '
                >
                    <button
                        onPointerDown = {confirmPointerDown}
                        className='
                            px-8
                            text-[rgb(229,115,115)]
                            duration-300

                            hover:bg-[rgb(229,115,115)]
                            hover:text-[rgb(31,31,31)]
                        '
                    >
                        Yes
                    </button>
                    
                    <button
                        onPointerDown = {cancelPointerDown}
                        className='
                            px-8
                            text-[rgb(250,250,250)]
                            duration-300

                            hover:bg-[rgb(250,250,250)]
                            hover:text-[rgb(31,31,31)]
                        '
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    )
}

ConfirmationDialog.propTypes = {
    id : PropTypes.string,
    text : PropTypes.string,
    confirmPointerDown : PropTypes.func,
    cancelPointerDown : PropTypes.func,
}