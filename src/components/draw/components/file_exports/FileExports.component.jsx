import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import { Section } from 'clean-styled-components/src/styled-components/elements/Section.styled.element';

import { layout } from '../../../../styled-components/components/layout/layout.styled.component';

import { DropDownOptions } from '../drop_down_options/DropDownOptions.component';

import { fileExportsStaticProperties } from './FileExports.staticProperties';

export const FileExports= () =>{

    const showExportDialog = () =>{
        const exportDialog = document.getElementById('export-dialog')
        const exportDialogExist = exportDialog != null

        if(exportDialogExist) exportDialog.showModal()
    }

    const setExportsOptions = [
        {
            type : 'button',
            value : 'Back to home'
        },
        {
            type : 'break',
        },
        {
            type : 'button',
            value : 'Export PiCSSa',
            onPointerDown : showExportDialog,
        },
    ]

    const fileExportProperties = layout(fileExportsStaticProperties);

    return(
        <Section id = 'file-exports' $properties = {fileExportProperties}>
            <DropDownOptions
                icon = {{
                    value : faCss3Alt,
                    style : {},
                }}

                options={setExportsOptions}
            />
        </Section>
    );
}