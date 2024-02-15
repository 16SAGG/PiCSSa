import { useFileStore } from '../../../../store/file.store';

export const FileName = () =>{
    const fileName = useFileStore(state => state.fileName)
    const setName = useFileStore(state => state.setName)
    
    return(
        <section 
            id = 'file-name'
            className='
                flex
                grow
            '
        >
            <input
                value = {fileName}
                type = 'text' 
                onChange = {(event) => setName(event.target.value)}
                className='
                    outline-none
                    grow
                    text-center
                    bg-[rgb(31,31,31)]
                    text-[rgb(250,250,250)]
                    duration-300

                    focus:bg-[rgb(20,20,20)]
                    focus:text-left
                '
            />
        </section>
    );
}