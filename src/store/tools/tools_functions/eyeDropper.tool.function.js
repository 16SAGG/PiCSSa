const eventType = {}

export const eyeDropper = (
    event = {}, 
    toolArguments = {}
) =>{

    eventType[event.type]({
        isActive : toolArguments.pointer.isPressed, 
        buttonThatIsPressed : event.button,
        backgroundColor : toolArguments.backgroundColor,
        setCurrentColors : toolArguments.setCurrentColors,
    })
}

eventType.pointerdown = ({
    isActive = false, 
    buttonThatIsPressed = -1,
    backgroundColor = '', 
    setCurrentColors = () =>{},
}) =>{
    
    if (isActive) setCurrentColors(buttonThatIsPressed, backgroundColor)
}

eventType.pointerup = eventType.pointerover = (empty = {}) =>{return empty}