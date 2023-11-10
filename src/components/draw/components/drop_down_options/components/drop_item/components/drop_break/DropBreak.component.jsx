import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { Li } from 'clean-styled-components/src/styled-components/elements/Li.styled.element';

import { layout } from "../../../../../../../../styled-components/components/layout/layout.styled.component"

import { containerStaticProperties } from './DropBreak.staticProperties';

export const DropBreak = () =>{

    const containerProperties = layout(containerStaticProperties)

    return(
        <Li>
            <Div
                $properties = {containerProperties}
            >
                <hr/>
            </Div>
        </Li>
    )
}