import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import { DropDownOptions } from '../drop_down_options/DropDownOptions.component';

export const FileExports= () =>{

    const showExportDialog = () =>{
        const exportDialog = document.getElementById('export-dialog')
        const exportDialogExist = exportDialog != null

        if(exportDialogExist) exportDialog.showModal()
    }

    const setExportsOptions = [
        //{
        //    type : 'button',
        //    value : 'Back to home'
        //},
        //{
        //    type : 'break',
        //},
        {
            type : 'button',
            value : 'Export PiCSSa',
            onPointerDown : showExportDialog,
        },
    ]

    return(
        <section 
            id = 'file-exports'
            className='
                min-w-[90px]
            '
        >
            <DropDownOptions
                icon = {{
                    value : faCss3Alt,
                    style : {},
                }}

                options={setExportsOptions}
            />
        </section>
    );
}