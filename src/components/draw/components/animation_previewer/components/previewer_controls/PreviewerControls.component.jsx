import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';

import { useAnimationStore } from '../../../../../../store/animation.store';

import { layout } from '../../../../../../styled-components/components/layout/layout.styled.component';
import { iconButton } from '../../../../../../styled-components/components/iconButton/iconButton.styled.component';

import { previewerControlsStaticProperties, } from './PreviewerControls.staticProperties';
import { RangeInput } from '../../../range_input/RangeInput.component';

export const PreviewerControls = () =>{
    const animationIsPlaying = useAnimationStore(state => state.animationIsPlaying)
    const setAnimationIsPlaying = useAnimationStore(state => state.setAnimationIsPlaying)
    const FPS = useAnimationStore(state => state.FPS)
    const setFPS = useAnimationStore(state => state.setFPS)

    const previewerControlsProperties = layout(previewerControlsStaticProperties);
    const playStopButtonProperties = iconButton({});
    
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

            <RangeInput
                value = {FPS}
                setValue = {setFPS}
                textContent = {`FPS: ${FPS}`}
            />
        </Div>
    );
}