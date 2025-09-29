import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home/indexHome";
import Portfolio from "./paginas/Portfolio/indexPortfolio";
import Sobre from "./paginas/Sobre/indexSobre";
import NotFound from "./paginas/NotFound/indexNotFound";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" Component={Home} />
                <Route exact={true} path="/Portfolio" Component={Portfolio} />
                <Route exact={true} path="/Sobre" Component={Sobre} />
                <Route exact={true} path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
