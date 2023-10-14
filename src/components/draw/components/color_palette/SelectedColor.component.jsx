import { SelectedColorStyle } from "./SelectedColor.styled.component";

export const SelectedColor = ({$asContainer, $asItem, $currentColor, $gridRow, $gridColumn}) =>{
    return(
        <SelectedColorStyle
            $asContainer = {$asContainer}
            $asItem = {$asItem}
            $gridRow = {$gridRow}
            $gridColumn = {$gridColumn}
            $gridBgSize = '14.5px'
        >
            <div style={{background: $currentColor, flexGrow: 1 }}>

            </div>
        </SelectedColorStyle>
    );
}