import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Input } from 'clean-styled-components/src/styled-components/elements/Input.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../../../styled-components/components/iconButton/iconButton.styled.component';
import { text } from '../../../../../../styled-components/components/text/text.styled.component';
import { rangeInput } from '../../../../../../styled-components/components/rangeInput/rangeInput.styled.component';

import { FPSCounterStaticProperties, previewerControlsStaticProperties, rangeFPSInputStaticProperties, rangeFPSStaticProperties } from './PreviewerControls.staticProperties';

export const PreviewerControls = () =>{

    const previewerControlsProperties = layout(previewerControlsStaticProperties);
    const playStopButtonProperties = iconButton({});
    const rangeFPSProperties = layout(rangeFPSStaticProperties);
    const rangeFPSInputProperties = rangeInput(rangeFPSInputStaticProperties);
    const FPSCounterProperties = text(FPSCounterStaticProperties);

    return(
        <Div id = 'previewer-controls' $properties = {previewerControlsProperties}>
            <Button id = 'play-stop-button' $properties = {playStopButtonProperties} >
                <FontAwesomeIcon icon = {faPlay}/>
            </Button>
            <Span  id = 'range-fps' $properties = {rangeFPSProperties}>
                <Input id = 'range-fps-input' type = 'range' min = '0' max = '24' $properties = {rangeFPSInputProperties}/>
                <Span id = 'fps-counter' $properties = {FPSCounterProperties}>
                    22
                </Span>
            </Span>
        </Div>
    );
}