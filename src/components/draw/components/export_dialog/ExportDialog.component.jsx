import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

import { faX} from '@fortawesome/free-solid-svg-icons';

import { convertPixelArtAnimationToCSS, convertPixelArtSingleToCSS } from '../../../../utilities/convertPixelArtToCSS';
import { useFramesStore } from '../../../../store/frames.store';
import { useFileStore } from '../../../../store/file.store';
import { useAnimationStore } from '../../../../store/animation.store';

import { FlatButton } from '../../../tailwindComponents/flatButton';
import { RangeInput } from '../../../tailwindComponents/RangeInput';

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

    return (
        <dialog 
            id = 'export-dialog'
            className='
                bg-[rgb(31,31,31)]
                text-[rgb(250,250,250)]
                border-2
                border-[rgba(250,250,250,0.05)]
                p-5
            '
        >
            <div 
                className='
                    flex
                    flex-col
                    gap-[24px]
                    min-w-[246px]
                    min-h-[70vh]

                    md:min-w-[40vw]
                '
            >
                <header 
                    className='
                        flex
                    '
                >
                    <div
                        className='grow'
                    ></div>
                    <FlatButton 
                        onPointerDown = {closePointerDown}
                        content={<FontAwesomeIcon icon={faX}/>}
                    />
                </header>
                <div 
                    className ='
                        flex
                        flex-col
                        gap-[12px]
                    '
                >
                    <RangeInput
                        inputValue = {pixelSizeExport}
                        setInputValue = {setPixelSizeExport}
                        textContent = {`SCALE: x${pixelSizeExport}`}
                    />
                    <button
                        onPointerDown = {copyPointerDown}
                        className='
                            bg-transparent
                            p-1
                            duration-300

                            hover:bg-[rgb(20,20,20)]
                        '
                    >
                        Copy
                    </button>
                </div>
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
            </div>
        </dialog>
    )
}

ExportDialog.propTypes = {
    closePointerDown : PropTypes.func,
}