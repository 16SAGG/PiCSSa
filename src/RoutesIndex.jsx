import { BrowserRouter, Routes as RoutesList, Route } from "react-router-dom";

export const RoutesIndex = ({path, element}) => {
    return (
        <BrowserRouter>
            <RoutesList>
                <Route path={path} element={element}/>
            </RoutesList>
        </BrowserRouter>
    );
}