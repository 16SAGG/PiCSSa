import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEraser, faEyeDropper, faFill, faHand, faPencil, faSquare } from '@fortawesome/free-solid-svg-icons'

import { flexItem } from "../../../../styled_components/layout/flexItem.styled.abstract";
import { gridContainer } from "../../../../styled_components/layout/gridContainer.styled.abstract";

import { IconButton } from "../../../../styled_components/IconButton.styled.component";
import { Layout } from "../../../../styled_components/layout/Layout.styled.component";

import { themes } from "../../../../themes";

export const DrawTools = () =>{
    return(
        <Layout 
            id='draw-tools'
            $asContainer= {gridContainer}
            $asItem = {flexItem}
            $minHeight = {themes.row.medium}
            $paddingTop = {themes.gap.big}
            $paddingBottom = {themes.gap.big}
            $gridTemplateColumns = '50fr 50fr'
            $gridTemplateRows = 'none'
            $borderBottomWidth = {themes.borderWidth.small}
        >
            <IconButton>
                <FontAwesomeIcon icon={faPencil} transform="grow-10" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faHand} transform="grow-10" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faFill} transform="grow-10" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faEyeDropper} transform="grow-10" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faSquare} transform="grow-10" />
            </IconButton>
            <IconButton>
                <FontAwesomeIcon icon={faEraser} transform="grow-10" />
            </IconButton>
        </Layout>
    );
}