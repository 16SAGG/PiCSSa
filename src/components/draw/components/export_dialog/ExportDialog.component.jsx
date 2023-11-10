import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import { faX} from '@fortawesome/free-solid-svg-icons';

import { Dialog } from 'clean-styled-components/src/styled-components/elements/Dialog.styled.element';
import { Header } from 'clean-styled-components/src/styled-components/elements/Header.styled.element';
import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../styled-components/components/iconButton/iconButton.styled.component';

import { RangeInput } from '../range_input/RangeInput.component';
import { convertPixelArtAnimationToCSS, convertPixelArtSingleToCSS } from '../../../../utilities/convertPixelArtToCSS';
import { useFramesStore } from '../../../../store/frames.store';
import { useFileStore } from '../../../../store/file.store';
import { useAnimationStore } from '../../../../store/animation.store';

import { exportDialogContainerStaticProperties, exportDialogStaticProperties } from './ExportDialog.staticProperties';
import { dialogButton } from '../../../../styled-components/components/dialogButton/dialogButton.styled.component';
import { size } from '../../../../themes';

export const ExportDialog = ({
    closePointerDown = () =>{},
}) =>{
    const currentFrame = useFramesStore(state => state.currentFrame)
    const framesList = useFramesStore(state => state.framesList)
    const framesCount = framesList.length
    
    const animationIsPlaying = useAnimationStore(state => state.animationIsPlaying)
    const FPS = useAnimationStore(state => state.FPS)

    const animationDuration = framesCount/FPS

    const fileName = useFileStore(state => state.fileName)
    const pixelSizeExport = useFileStore(state => state.pixelSizeExport)
    const setPixelSizeExport = useFileStore(state => state.setPixelSizeExport)

    const thereIsMoreThanOneFrame = framesList.length > 1

    const copyPointerDown = async () =>{
        const exportArea = document.getElementById('export-area')

        exportArea.select()
        exportArea.setSelectionRange(0, 99999); 

        try {
            await navigator.clipboard.writeText(exportArea.value);
            alert('Content copied to clipboard');
        } catch (err) {
            alert('Failed to copy: ', err);
        }
    }

    const exportDialogProperties = layout(exportDialogStaticProperties)
    const exportDialogContainerProperties = layout(exportDialogContainerStaticProperties)

    return (
        <Dialog id = 'export-dialog' $properties = {exportDialogProperties}>
            <Div $properties = {exportDialogContainerProperties}>
                <Header $properties = {layout({$display : 'flex'})}>
                    <Div $properties = {layout({$flexGrow : 1})}></Div>
                    <Button 
                        onPointerDown = {closePointerDown}
                        $properties = {iconButton({})}
                    >
                        <FontAwesomeIcon icon={faX}/>
                    </Button>
                </Header>
                <Div $properties = {layout({$display : 'flex', $gap : '12px', $flexDirection : 'column'})}>
                    <RangeInput
                        value = {pixelSizeExport}
                        setValue = {setPixelSizeExport}
                        textContent = {`SCALE: x${pixelSizeExport}`}
                        textMinWidth = {`${parseFloat(size.box)*2}px`}
                    />
                    <Button 
                        onPointerDown = {copyPointerDown}
                        $properties = {dialogButton({})}
                    >
                        Copy
                    </Button>
                </Div>
                <textarea
                    id = 'export-area'
                    readOnly
                    value = {
                        (thereIsMoreThanOneFrame && animationIsPlaying) ?
                            convertPixelArtAnimationToCSS(framesList, fileName, pixelSizeExport, animationDuration)
                        :
                            convertPixelArtSingleToCSS(framesList[currentFrame], fileName, pixelSizeExport)
                    }
                ></textarea>
            </Div>
        </Dialog>
    )
}


ExportDialog.propTypes = {
    closePointerDown : PropTypes.func,
}