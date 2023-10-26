export const getColorInUse = (currentColors, keyInput) => {
    if (keyInput === -1 ) return

    else if (keyInput === 0 ) return currentColors.primary

    return currentColors.secondary
}