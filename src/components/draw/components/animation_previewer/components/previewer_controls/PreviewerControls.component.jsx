import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Input } from 'clean-styled-components/src/styled-components/elements/Input.styled.element';
import { Span } from 'clean-styled-components/src/styled-components/elements/Span.styled.element';

import { useAnimationStore } from '../../../../../../store/animation.store';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../../../styled-components/components/iconButton/iconButton.styled.component';
import { text } from '../../../../../../styled-components/components/text/text.styled.component';
import { rangeInput } from '../../../../../../styled-components/components/rangeInput/rangeInput.styled.component';

import { FPSCounterStaticProperties, previewerControlsStaticProperties, rangeFPSInputStaticProperties, rangeFPSStaticProperties } from './PreviewerControls.staticProperties';

export const PreviewerControls = () =>{
    const animationIsPlaying = useAnimationStore(state => state.animationIsPlaying)
    const setAnimationIsPlaying = useAnimationStore(state => state.setAnimationIsPlaying)
    const FPS = useAnimationStore(state => state.FPS)
    const setFPS = useAnimationStore(state => state.setFPS)

    const previewerControlsProperties = layout(previewerControlsStaticProperties);
    const playStopButtonProperties = iconButton({});
    const rangeFPSProperties = layout(rangeFPSStaticProperties);
    const rangeFPSInputProperties = rangeInput(rangeFPSInputStaticProperties);
    const FPSCounterProperties = text(FPSCounterStaticProperties);

    return(
        <Div id = 'previewer-controls' $properties = {previewerControlsProperties}>
            <Button
                onPointerDown = {() => setAnimationIsPlaying(!animationIsPlaying)}
                $properties = {playStopButtonProperties}
            >
                {
                    (animationIsPlaying) ?
                        <FontAwesomeIcon icon = {faStop}/>
                    :
                        <FontAwesomeIcon icon = {faPlay}/>
                }
            </Button>

            <Span $properties = {rangeFPSProperties}>
                <Input 
                    type = 'range' 
                    min = '1' max = '24' 
                    value = {FPS}
                    onChange = {(event) => setFPS(event.target.value)}
                    $properties = {rangeFPSInputProperties}
                />
                
                <Span $properties = {FPSCounterProperties}>
                    {FPS}
                </Span>
            </Span>
        </Div>
    );
}