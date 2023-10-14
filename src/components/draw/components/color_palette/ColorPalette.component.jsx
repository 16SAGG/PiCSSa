import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTurnUp } from '@fortawesome/free-solid-svg-icons';

import { themes } from "../../../../themes";

import { flexContainer } from "../../../../styled_components/layout/flexContainer.styled.abstract";
import { flexItem } from "../../../../styled_components/layout/flexItem.styled.abstract";
import { gridContainer } from "../../../../styled_components/layout/gridContainer.styled.abstract";
import { gridItem } from "../../../../styled_components/layout/gridItem.styled.abstract";

import { IconButton } from "../../../../styled_components/IconButton.styled.component";
import { Layout } from "../../../../styled_components/layout/Layout.styled.component";

import { ColorButton } from "./ColorButton.styled.component";

import { SelectedColor } from './SelectedColor.component';

export const ColorPalette = () =>{
    return(
        <Layout 
            id='color-palette'
            $asContainer = {flexContainer}
            $asItem = {flexItem}
            $flexGrow = '1'
            $gap = {themes.gap.big}
            $paddingTop = {themes.gap.big}
            $paddingBottom = {themes.gap.big}
            $paddingLeft = {themes.gap.giant}
            $paddingRight = {themes.gap.giant}
            $maxHeight = {themes.row.big}
        >
            <Layout
                $asContainer = {flexContainer}
                $asItem = {flexItem}
                $flexDirection = 'column'
                $flexGrow = '1'
            >
                <Layout
                    $asContainer = {gridContainer}
                    $asItem = {flexItem}
                    $gap = {themes.gap.mini}
                    $minHeight = {`${((parseInt(themes.row.mini) + parseInt(themes.gap.mini)) * 3) + parseInt(themes.row.mini)}px`}
                >
                    <SelectedColor
                        $asContainer = {flexContainer}
                        $asItem = {gridItem}
                        $gridRow = '1 / 1'
                        $gridColumn = '1 / 1'
                        $currentColor = ''
                    />
                    <IconButton
                        $asItem = {gridItem}
                        $gridRow = '2 / 2'
                        $gridColumn = '1 / 1'
                    >
                        <FontAwesomeIcon icon={faTurnUp} transform="grow-10 right-5" rotation={90}/>
                    </IconButton>
                    <SelectedColor
                        $asContainer = {flexContainer}
                        $asItem = {gridItem}
                        $gridRow = '2 / 2'
                        $gridColumn = '2 / 2'
                        $currentColor = ''
                    />
                </Layout>
                <Layout
                    $asItem = {flexItem}
                    $flexGrow = '1'
                >
                </Layout>
                <IconButton
                    $minHeight = {themes.row.small}
                >
                    <FontAwesomeIcon icon={faPlus} transform="grow-10"/>
                </IconButton>
            </Layout>
            <Layout
                $asContainer = {gridContainer}
                $asItem = {flexItem}
                $flexGrow = '0.2'
                $gap = {themes.gap.mini}
                $gridTemplateColumns = '50fr 50fr'
                $gridTemplateRows = 'none'
                $overflow = 'auto'
                $paddingRight = {themes.gap.small}
                $alignContent = 'start'
            >
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
                <ColorButton/>
            </Layout>
        </Layout>
    );
}