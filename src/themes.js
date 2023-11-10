export const paletteRGBA = (alfa = 1) => {
    const colors = {
        theme_1 : {
            primary : `rgba(31, 31, 31, ${alfa})`,
            primaryVariant : `rgba(20, 20, 20, ${alfa})`,
            onPrimary : `rgba(250, 250, 250, ${alfa})`,
            
            secondary : `rgba(255, 183, 77, ${alfa})`,
            secondaryVariant : undefined,
            onSecondary : `rgba(31, 31, 31, ${alfa})`,

            danger : `rgba(229, 115, 115, ${alfa})`,
            onDanger : `rgba(31, 31, 31, ${alfa})`,
            
            background : `rgba(24, 24, 24, ${alfa})`,
            onBackground : `rgba(250, 250, 250, ${alfa})`,
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
