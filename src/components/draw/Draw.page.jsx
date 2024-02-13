import { useFramesStore } from '../../store/frames.store';

import { determineIfThereIsOverflow } from '../../utilities/determineIfThereIsOverflow';

import { AnimationPreviewer } from './components/animation_previewer/AnimationPreviewer.component';
import { AnimationFrames } from './components/animation_frames/AnimationFrames.component';
import { ColorPalette } from './components/color_palette/ColorPalette.component';
import { DrawTools } from './components/draw_tools/DrawTools.component';
import { FileExports } from './components/file_exports/FileExports.component';
import { FileName } from './components/file_name/FileName.component';
import { FileSettings } from './components/file_settings/FileSettings.component';
import { SelectedColors } from './components/selected_colors/SelectedColors.component';
import { PixelArtCanvas } from './components/pixel_art_canvas/PixelArtCanvas.component';
import { ConfirmationDialog } from './components/confirmation_dialog/ConfirmationDialog.component';
import { ExportDialog } from './components/export_dialog/ExportDialog.component';

export const Draw = () =>{
    const resetProject = useFramesStore(state => state.resetProject)
    
    const modalClose = (id) =>{
        const modal = document.getElementById(id)
        modal.close()
    } 

    return(
        <>
            <ConfirmationDialog
                id = 'reset-confirmation-dialog'
                text = 'Are you sure you want to reset the project?'
                confirmPointerDown = {() => {
                    resetProject()
                    modalClose('reset-confirmation-dialog')
                }}
                cancelPointerDown = {() => modalClose('reset-confirmation-dialog')}
            />

            <ExportDialog
                closePointerDown={() => modalClose('export-dialog')}
            />

            <div 
                id = 'draw'
                className='
                    flex
                    flex-col
                    min-h-[100vh]
                    max-h-[100vh]
                    min-w-[100vw]
                    max-w-[100vw]
                    bg-[rgb(24,24,24)]
                '
            >
                <header
                    className ="
                        flex
                        min-h-[48px]
                        bg-[rgb(31,31,31)]
                        border-b-[1px]
                        border-b-[rgba(250,250,250,0.05)]
                    "
                >
                    <FileExports/>
                    <FileName/>
                    <FileSettings/>
                </header>

                <main 
                    className='
                        flex
                        grow
                        gap-[2px]
                    '
                >
                    <div 
                        id = 'left-column'
                        className='
                            flex
                            flex-col
                            bg-[rgb(31,31,31)]
                            min-w-[98px]
                            border-r-[1px]
                            border-r-[rgba(250,250,250,0.05)]
                        '
                    >
                        <div 
                            id = 'left-column-top' 
                            className='
                                flex
                                grow
                            '
                        >
                            <DrawTools/>
                            <ColorPalette/>
                        </div>
                        <div 
                            id = 'left-column-bottom' 
                            className='
                                flex
                                min-h-[98px]
                                items-center
                                justify-center
                            '
                        >
                            <SelectedColors/>
                        </div>
                    </div>

                    <div 
                        id = 'center-column'
                        onPointerDown = {(event) => event.preventDefault()}
                        className='
                            flex
                            grow
                            items-center
                            justify-center
                            my-[24px]
                            max-h-[84.66vh]
                            overflow-auto
                        '
                    >
                        <PixelArtCanvas/>
                    </div>

                    <div 
                        id = 'right-column' 
                        className='
                            flex
                            flex-col
                            bg-[rgb(24,24,24)]
                            mw-[240px]
                            border-l-[1px]
                            border-l-[rgba(250,250,250,0.05)]
                        '
                    >
                        <AnimationPreviewer/>
                        <AnimationFrames/>
                    </div>
                </main>
            </div>
        </>
    );
}

window.onresize = () =>{
    const centerColumn = document.getElementById('center-column')
    const canvas = document.getElementById('canvas')
    
    const thereIsOverflowInTheWidth = determineIfThereIsOverflow(canvas, centerColumn).width
    const thereIsOverflowInTheHeight = determineIfThereIsOverflow(canvas, centerColumn).height

    centerColumn.style.justifyContent = (thereIsOverflowInTheHeight) ? 'start' : 'center'
    centerColumn.style.alignItems = (thereIsOverflowInTheWidth) ? 'start' : 'center'
}