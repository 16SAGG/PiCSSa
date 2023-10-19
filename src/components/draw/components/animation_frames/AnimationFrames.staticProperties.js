import { size } from "../../../../themes"

export const animationFramesStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $flexGrow : '1',
}

export const framesListStaticProperties = {
    $listStyleType : 'none',
    $alignItems : 'center',
    $maxHeight : '232px',
    $paddingLeft : `${parseFloat(size.gap)*4}px`,
}

export const addFrameButtonStaticProperties = {
    $flexGrow : '1',
    $maxHeight : '58px',
}