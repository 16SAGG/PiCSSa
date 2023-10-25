import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';

import { checkBoardContainer } from '../../../../../../styled-components/components/checkBoardContainer/checkBoardContainer.styled.component';

import { previewerBoxStaticProperties } from './PreviewerBox.staticProperties';

export const PreviewerBox = () =>{

    const previewerBoxProperties = checkBoardContainer(previewerBoxStaticProperties);

    return(
        <Div id = 'previewer-box' $properties = {previewerBoxProperties} >

        </Div>
    );
}