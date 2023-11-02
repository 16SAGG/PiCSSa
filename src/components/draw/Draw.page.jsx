import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Header } from 'clean-styled-components/src/styled-components/elements/Header.styled.element';
import { Main } from 'clean-styled-components/src/styled-components/elements/Main.styled.element';

import { scroll } from '../../styled-components/components/scroll/scroll.styled.component';
import { layout } from '../../styled-components/components/layout/layout.styled.component';

import { AnimationPreviewer } from './components/animation_previewer/AnimationPreviewer.component';
import { AnimationFrames } from './components/animation_frames/AnimationFrames.component';
import { ColorPalette } from './components/color_palette/ColorPalette.component';
import { DrawTools } from './components/draw_tools/DrawTools.component';
import { FileExports } from './components/file_exports/FileExports.component';
import { FileName } from './components/file_name/FileName.component';
import { FileResize } from './components/file_resize/FileResize.component';
import { FileReset } from './components/file_reset/FileReset.component';
import { FileZoom } from './components/file_zoom/FileZoom.component';
import { SelectedColors } from './components/selected_colors/SelectedColors.component';
import { PixelArtCanvas } from './components/pixel_art_canvas/PixelArtCanvas.component';

import { drawStaticProperties, headerStaticProperties, mainStaticProperties, leftColumnStaticProperties, rightColumnStaticProperties, centerColumnStaticProperties, leftColumnTopStaticProperties, leftColumnBottomStaticProperties } from './Draw.staticProperties';

export const Draw = () =>{
    
    const drawProperties = layout (drawStaticProperties);
    const headerProperties =  layout(headerStaticProperties);
    const mainProperties = layout(mainStaticProperties);
    
    const leftColumnProperties =  layout(leftColumnStaticProperties);
    const leftColumnTopProperties = layout(leftColumnTopStaticProperties);
    const leftColumnBottomProperties = layout(leftColumnBottomStaticProperties);

    const rightColumnProperties = layout(rightColumnStaticProperties);

    const centerColumnProperties = scroll(centerColumnStaticProperties);

    return(
        <Div id = 'draw' $properties = {drawProperties}>
            <Header id = 'draw-bar' $properties = {headerProperties}>
                <FileExports/>
                <FileName/>
                <FileZoom/>
                <FileResize/>
                <FileReset/>
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
    );
}