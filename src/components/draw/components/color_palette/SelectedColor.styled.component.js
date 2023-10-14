import {styled} from 'styled-components';

import { gridBackground } from '../../../../styled_components/gridBackground.styled.abstract';
import { palette, themes } from '../../../../themes';

export const SelectedColorStyle = styled.div`
    ${props => (props.$asContainer) ? props.$asContainer(props) : ''}
    ${props => (props.$asItem) ? props.$asItem(props) : ''}
    ${props => gridBackground(props)}

    background-color: ${props => props.$backgroundColor || palette.black_2};
    
    border-style: solid;
    border-color: ${themes.color.elementBorder};
    border-top-width: ${themes.borderWidth.medium};
    border-bottom-width: ${themes.borderWidth.medium};
    border-left-width: ${themes.borderWidth.medium};
    border-right-width: ${themes.borderWidth.medium};
    
    opacity: 0.85;
    transition: ${themes.duration.fast};
    
    &:hover {
        opacity: 1;
    }
`;