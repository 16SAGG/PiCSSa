import { palette, size } from "../../themes"


export const drawStaticProperties = {
    $display : 'flex',
    $flexDirection : 'column',
    $minHeight : '100vh',
    $overflow : 'hidden',
    $backgroundColor : palette.theme_1.background,
}

export const headerStaticProperties = {
    $display : 'flex',
    $minHeight : size.box,
    $backgroundColor : palette.theme_1.surface,
}