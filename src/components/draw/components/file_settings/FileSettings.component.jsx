import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDownLeftRight, faArrowsRotate, faMagnifyingGlassMinus, faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';

import { useCanvasStore } from '../../../../store/canvas.store';
import { useFramesStore } from '../../../../store/frames.store';

import { DropDownOptions } from '../drop_down_options/DropDownOptions.component';
import { FlatButton } from '../../../tailwindComponents/flatButton';

export const FileSettings = () => {
    const canvasDimensions = useCanvasStore(state => state.canvasDimensions)
    const setColumnsXRowsCount = useCanvasStore(state => state.setColumnsXRowsCount)
    const increasePixelSize = useCanvasStore(state => state.increasePixelSize)
    const reducePixelSize = useCanvasStore(state => state.reducePixelSize)

    const addAColumn = useFramesStore(state => state.addAColumn)
    const removeAColumn = useFramesStore(state => state.removeAColumn)
    const addARow = useFramesStore(state => state.addARow)
    const removeARow = useFramesStore(state => state.removeARow)

    const setColumnsOptions = [{
        type : 'numberInput', 
        value : canvasDimensions.columnsCount,
        onPlusPointerDown : () => {
            setColumnsXRowsCount(canvasDimensions.columnsCount + 1)
            addAColumn()
            addARow()
        },
        onMinusPointerDown : () => {
            setColumnsXRowsCount(canvasDimensions.columnsCount - 1)
            removeAColumn()
            removeARow()
        },
    }]

    const minimalSettingsOptions = [
        {
            type: 'button',
            value: 'Zoom In',
            onPointerDown: () => increasePixelSize(),
        },
        {
            type: 'button',
            value: 'Zoom Out',
            onPointerDown: () => reducePixelSize(),
        },
        {
            type: 'break',
        },
        {
            type: 'button',
            value: 'More Pixels',
            onPointerDown: () => {
                setColumnsXRowsCount(canvasDimensions.columnsCount + 1)
                addAColumn()
                addARow()
            },
        },
        {
            type: 'button',
            value: 'Less Pixels',
            onPointerDown: () => {
                setColumnsXRowsCount(canvasDimensions.columnsCount - 1)
                removeAColumn()
                removeARow()
            },
        },
        {
            type: 'break',
        },
        {
            type: 'button',
            value: 'Reset',
            onPointerDown: () => showResetConfirmationDialog(),
        },
    ]

    const showResetConfirmationDialog = () =>{
        const resetConfirmationDialog = document.getElementById('reset-confirmation-dialog')
        const resetConfirmationDialogExist = resetConfirmationDialog != null

        if(resetConfirmationDialogExist) resetConfirmationDialog.showModal()
    }

    return (
        <>
            <section 
                id = 'file-settings'
                className='
                    hidden

                    md:flex
                '
            >
                <FlatButton
                    onPointerDown={() => increasePixelSize()}
                    content={<FontAwesomeIcon icon={faMagnifyingGlassPlus}/>}
                />
                <FlatButton
                    onPointerDown={() => reducePixelSize()}
                    content={<FontAwesomeIcon icon = {faMagnifyingGlassMinus}/>}
                />
                <DropDownOptions
                    icon = {{
                        value : faArrowsUpDownLeftRight,
                        style : {},
                    }}
                    options = {setColumnsOptions}
                />
                <FlatButton
                    onPointerDown={() => showResetConfirmationDialog()}
                    content={<FontAwesomeIcon icon = {faArrowsRotate} />}
                />
            </section>
            <section
                className='
                    flex
                    min-w-[90px]

                    md:hidden
                '
            >
                <div
                    className='
                        grow
                    '
                ></div>
                <DropDownOptions
                    icon = {{
                        value : faArrowsUpDownLeftRight,
                        style : {},
                    }}
                    options = {minimalSettingsOptions}
                    directionLeft = {true}
                />
            </section>
        </>
    )
}