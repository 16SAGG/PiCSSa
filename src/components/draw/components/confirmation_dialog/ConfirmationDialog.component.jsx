import PropTypes from 'prop-types'

import { Button } from 'clean-styled-components/src/styled-components/elements/Button.styled.element';
import { Dialog } from 'clean-styled-components/src/styled-components/elements/Dialog.styled.element';
import { Div } from 'clean-styled-components/src/styled-components/elements/Div.styled.element';
import { P } from 'clean-styled-components/src/styled-components/elements/P.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';
import { dialogButton } from '../../../../styled-components/components/dialogButton/dialogButton.styled.component';

import { buttonsContainerStaticProperties, confirmButtonStaticProperties, dialogContainerStaticProperties } from './ConfirmationDialog.staticProperties';

export const ConfirmationDialog = ({id, text, confirmPointerDown, cancelPointerDown}) =>{
    const dialogContainerProperties = layout(dialogContainerStaticProperties)
    const buttonsContainerProperties = layout(buttonsContainerStaticProperties)
    
    const confirmButtonProperties = dialogButton(confirmButtonStaticProperties)
    const cancelButtonProperties = dialogButton({})

    return (
        <Dialog
            id = {id}
            $properties = {dialogContainerProperties}
        >
            <P>{text}</P>

            <Div
                $properties = {buttonsContainerProperties}
            >
                <Button
                    onPointerDown = {confirmPointerDown}
                    $properties = {confirmButtonProperties}
                >
                    Yes
                </Button>
                
                <Button
                    onPointerDown = {cancelPointerDown}
                    $properties = {cancelButtonProperties}
                >
                    Cancel
                </Button>
            </Div>
        </Dialog>
    )
}

ConfirmationDialog.propTypes = {
    id : PropTypes.string,
    text : PropTypes.string,
    confirmPointerDown : PropTypes.func,
    cancelPointerDown : PropTypes.func,
}