import { create } from "zustand";

import { faEraser, faEyeDropper, faFill, faHand, faPencil, faSquare } from '@fortawesome/free-solid-svg-icons'

import { pencil } from "./tools_functions/pencil.tool.function";
import { eraser } from "./tools_functions/eraser.tool.function";
import { eyeDropper } from "./tools_functions/eyeDropper.tool.function";
import { square } from "./tools_functions/square.tool.function";
import { fill } from "./tools_functions/fill.tool.function";

const TOOLS_LIST = [
    {
        icon : faPencil,
        function : pencil,
    },
    {
        icon : faHand,
        function : '',
    },
    {
        icon : faFill,
        function : fill,
    },
    {
        icon : faEyeDropper,
        function : eyeDropper,
    },
    {
        icon : faSquare,
        function : square,
    },
    {
        icon : faEraser,
        function : eraser,
    },
]

export const useToolsStore = create((set) =>({
    currentTool : 0,
    toolsList : TOOLS_LIST,

    setCurrentTool : (currentTool) =>{
        set({currentTool})
    }
}))

