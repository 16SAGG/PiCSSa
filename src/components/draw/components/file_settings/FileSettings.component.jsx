import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDownLeftRight, faArrowsRotate, faMagnifyingGlassMinus, faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { useCanvasStore } from '../../../../store/canvas.store';
import { useFramesStore } from '../../../../store/frames.store';

import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';
import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { DropDownOptions } from '../drop_down_options/DropDownOptions.component';

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

    const showResetConfirmationDialog = () =>{
        const resetConfirmationDialog = document.getElementById('reset-confirmation-dialog')
        const resetConfirmationDialogExist = resetConfirmationDialog != null

        if(resetConfirmationDialogExist) resetConfirmationDialog.showModal()
    }

    const fileSettingsProperties = layout({$display : 'flex'})
    const buttonProperties = iconButton({});

    return (
        <Section 
            id = 'file-settings'
            $properties = {fileSettingsProperties}
        >
            <Button 
                onPointerDown = {() => increasePixelSize()}
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon={faMagnifyingGlassPlus}/>
            </Button>

            <Button 
                onPointerDown = {() => reducePixelSize()}
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon = {faMagnifyingGlassMinus}/>
            </Button>

            <DropDownOptions
                icon = {{
                    value : faArrowsUpDownLeftRight,
                    style : {},
                }}
                options = {setColumnsOptions}
            />
            
            <Button
                onPointerDown = {() => showResetConfirmationDialog()} 
                $properties = {buttonProperties}
            >
                <FontAwesomeIcon icon = {faArrowsRotate} />
            </Button>
        </Section>
    )
}