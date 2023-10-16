export const paletteRGBA = (alfa = 1) => {
    const colors = {
        theme_1 : {
            primary : `rgba(31, 31, 31, ${alfa})`,
            primaryVariant : `rgba(20, 20, 20, ${alfa})`,
            onPrimary : `rgba(250, 250, 250, ${alfa})`,
            
            secondary : `rgba(141, 36, 70, ${alfa})`,
            secondaryVariant : undefined,
            onSecondary : `rgba(250, 250, 250, ${alfa})`,

            error : undefined,
            onError : undefined,
            
            background : `rgba(24, 24, 24, ${alfa})`,
            onBackground : `rgba(250, 250, 250, ${alfa})`,

            surface : `rgba(66, 66, 66, ${alfa})`,
            onSurface : `rgba(250, 250, 250, ${alfa})`,
        }
    };

    return colors;
}

export const size = {
    box : '48px',
    gutter : ' 24px',
    gap : '2px',
}

export const border = {
    width : {
        small : '1px',
        medium : '5px',
        big : undefined,
    },
    radius : {
        small : '5px',
        medium : undefined,
        big : undefined,
    }
}

export const duration = {
    fast : '0.1s',
    medium : undefined,
    slow : undefined,
}

export const transparency = {
    light : '0.85',
    medium : '0.5',
    dark : '0.05',
}

// export const themes = {}

// themes.gap = {
//     giant: '25px',
//     big: '20px',
//     medium: '10px',
//     small: '5px',
//     mini: '2px'
// }

// themes.color = {
//     background: palette.black_2,
//     main: palette.purple,
//     text: palette.white_1,
//     element: palette.black_3,
//     elementHover: palette.black_1,
//     elementBorder: palette.black_4,
//     icon: palette.white_2,
//     iconHover: palette.white_1,
//     scrollThumb: palette.white_2,
// }

// themes.borderWidth = {
//     small: '1px',
//     medium: '5px',
// }

// themes.borderRadius ={
//     small: '10px',
// }

// themes.column = {
//     small: '240px',
// }

// themes.row = {
//     mini: '24px',
//     small: '48px',
//     medium: '180px',
//     big: '317px'
// }

// themes.duration = {
//     fast: '0.15s'
// }