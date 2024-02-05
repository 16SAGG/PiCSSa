import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Header } from 'clean-styled-components/src/styled-components/elements/Header.styled.element';
import { Main } from 'clean-styled-components/src/styled-components/elements/Main.styled.element';

import { scroll } from '../../styled-components/components/scroll/scroll.styled.component';
import { layout } from '../../styled-components/components/layout/layout.styled.component';

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

import { drawStaticProperties, headerStaticProperties, mainStaticProperties, leftColumnStaticProperties, rightColumnStaticProperties, centerColumnStaticProperties, leftColumnTopStaticProperties, leftColumnBottomStaticProperties } from './Draw.staticProperties';

export const Draw = () =>{
    const resetProject = useFramesStore(state => state.resetProject)
    
    const modalClose = (id) =>{
        const modal = document.getElementById(id)
        modal.close()
    } 

    const drawProperties = layout (drawStaticProperties);
    const headerProperties =  layout(headerStaticProperties);
    const mainProperties = layout(mainStaticProperties);
    
    const leftColumnProperties =  layout(leftColumnStaticProperties);
    const leftColumnTopProperties = layout(leftColumnTopStaticProperties);
    const leftColumnBottomProperties = layout(leftColumnBottomStaticProperties);

    const rightColumnProperties = layout(rightColumnStaticProperties);

    const centerColumnProperties = scroll(centerColumnStaticProperties);

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

            <Div id = 'draw' $properties = {drawProperties}>
                <Header id = 'draw-bar' $properties = {headerProperties}>
                    <FileExports/>
                    <FileName/>
                    <FileSettings/>
                </Header>

                <Main $properties = {mainProperties}>
                    <Div id = 'left-column' $properties = {leftColumnProperties}>
                        <Div id = 'left-column-top' $properties = {leftColumnTopProperties}>
                            <DrawTools/>
                            <ColorPalette/>
                        </Div>
                        <Div id = 'left-column-bottom' $properties = {leftColumnBottomProperties}>
                            <SelectedColors/>
                        </Div>
                    </Div>

                    <Div 
                        id = 'center-column'
                        onPointerDown = {(event) => event.preventDefault()}
                        $properties = {centerColumnProperties}
                    >
                        <PixelArtCanvas/>
                    </Div>

                    <Div id = 'right-column' $properties = {rightColumnProperties}>
                        <AnimationPreviewer/>
                        <AnimationFrames/>
                    </Div>
                </Main>
            </Div>
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