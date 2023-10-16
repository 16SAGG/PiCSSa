import { ColorPalette } from './components/color_palette/ColorPalette.component';
import { DrawTools } from './components/draw_tools/DrawTools.component';
import { FileExports } from './components/file_exports/FileExports.component';
import { FileName } from './components/file_name/FileName.component';
import { FileResize } from './components/file_resize/FileResize.component';
import { FileReset } from './components/file_reset/FileReset.component';
import { FileZoom } from './components/file_zoom/FileZoom.component';

import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Header } from 'clean-styled-components/src/styled-components/elements/Header.styled.element';
import { Main } from 'clean-styled-components/src/styled-components/elements/Main.styled.element';

import { layout } from '../../styled-components/components/layout';

import { drawStaticProperties, headerStaticProperties, mainStaticProperties, leftColumnStaticProperties, rightColumnStaticProperties, centerColumnStaticProperties, leftColumnTopStaticProperties, leftColumnBottomStaticProperties } from './Draw.staticProperties';

export const Draw = () =>{
    
    const drawProperties = Object.assign({}, drawStaticProperties, {});
    
    const headerProperties = Object.assign({}, headerStaticProperties, {});
    
    const mainProperties = Object.assign({}, mainStaticProperties, {});
    
    const leftColumnProperties = Object.assign({}, leftColumnStaticProperties, {});
    const leftColumnTopProperties = Object.assign({}, leftColumnTopStaticProperties, {});
    const leftColumnBottomProperties = Object.assign({}, leftColumnBottomStaticProperties, {});

    const rightColumnProperties = Object.assign({}, rightColumnStaticProperties, {});
    
    const centerColumnProperties = Object.assign({}, centerColumnStaticProperties, {});

    return(
        <Div id = 'draw' $properties = {layout(drawProperties)}>
            <Header id = 'draw-bar' $properties = {layout(headerProperties)}>
                <FileExports/>
                <FileName/>
                <FileZoom/>
                <FileResize/>
                <FileReset/>
            </Header>
            <Main $properties = {layout(mainProperties)}>
                <Div id = 'left-column' $properties = {layout(leftColumnProperties)}>
                    <Div id = 'left-column-top' $properties = {layout(leftColumnTopProperties)}>
                        <DrawTools/>
                        <ColorPalette/>
                    </Div>
                    <Div id = 'left-column-bottom' $properties = {layout(leftColumnBottomProperties)}>
                        
                    </Div>
                </Div>
                <Div id = 'center-column' $properties = {layout(centerColumnProperties)}>

                </Div>
                <Div id = 'right-column' $properties = {layout(rightColumnProperties)}>

                </Div>
            </Main>
        </Div>
    );
}

/* <FileExports/>
<FileName/>
<FileZoom/>
<FileResize/>
<FileReset/> */

/* <main style={{
                gap : themes.gap.medium,
            }}>
                <Layout 
                    id='left-column' 
                    $asContainer={flexContainer} 
                    $asItem={flexItem} 
                    $flexDirection='column' 
                    $minWidth={themes.column.small} 
                    $borderRightWidth = {themes.borderWidth.small}
                >
                    <DrawTools/>
                    <ColorPalette/>
                </Layout>

                <Layout 
                    id='center-column' 
                    $asContainer={flexContainer} 
                    $asItem={flexItem} 
                    $flexGrow='1' 
                    $backgroundColor={themes.color.background}
                >

                </Layout>

                <Layout 
                    id='right-column' 
                    $asContainer={flexContainer} 
                    $asItem={flexItem} 
                    $flexDirection='column' 
                    $minWidth={themes.column.small} 
                    $borderLeftWidth = {themes.borderWidth.small}
                >
                
                </Layout>
            </main> 
*/