import { Section } from "clean-styled-components/src/styled-components/elements/Section.styled.element";

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import {  animationPreviewerStaticProperties} from "./AnimationPreviewer.staticProperties";

import { PreviewerControls } from './components/previewer_controls/PreviewerControls.component';
import { PreviewerBox } from "./components/previewer_box/PreviewerBox.component";

export const AnimationPreviewer = () =>{

    const animationPreviewerProperties = layout(animationPreviewerStaticProperties);

    return(
        <Section id = 'animation-previewer' $properties = {animationPreviewerProperties}>
            <PreviewerBox/>
            <PreviewerControls/>
        </Section>
    );
}