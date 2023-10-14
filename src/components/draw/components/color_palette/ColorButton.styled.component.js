import {styled} from 'styled-components';
import { palette, themes } from '../../../../themes';

export const ColorButton = styled.button`
    min-height: ${themes.row.mini};
    max-height: ${themes.row.mini};
    background-color: ${props => props.$gap || palette.white_1};
    border: none;
    opacity: 0.85;
    transition: ${themes.duration.fast};
    
    &:hover {
        opacity: 1;
    }
`;