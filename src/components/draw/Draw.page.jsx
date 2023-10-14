// import { ColorPalette } from './components/color_palette/ColorPalette.component';
// import { DrawTools } from './components/draw_tools/DrawTools.component';
import { FileExports } from './components/file_exports/FileExports.component';
import { FileName } from './components/file_name/FileName.component';
import { FileResize } from './components/file_resize/FileResize.component';
import { FileReset } from './components/file_reset/FileReset.component';
import { FileZoom } from './components/file_zoom/FileZoom.component';

import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Header } from 'clean-styled-components/src/styled-components/elements/Header.styled.element';

import { layout } from '../../styled-components/components/layout';

import { drawStaticProperties, headerStaticProperties } from './Draw.staticProperties';

export const Draw = () =>{
    
    const drawProperties = Object.assign({}, drawStaticProperties, {})
    const headerProperties = Object.assign({}, headerStaticProperties, {})

    return(
        <Div id='draw' $properties={layout(drawProperties)}>
            <Header id='draw-bar' $properties={layout(headerProperties)}>
                <FileExports/>
                <FileName/>
                <FileZoom/>
                <FileResize/>
                <FileReset/>
            </Header>
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