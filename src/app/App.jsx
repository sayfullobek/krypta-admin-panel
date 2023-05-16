import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashBoardLayout} from "../layout/DashBoardLayout";
import {Coins} from "../pages/admin/coins/Coins";
import {CoinAdd} from "../pages/admin/coins/CoinAdd";
import {Main} from "../pages/admin/Main";
import {NotFoundPages} from "../pages/NotFoundPages";
import {Login} from "../pages/auth/Login";
import {Vips} from "../pages/admin/vips/Vips";
import {VipsAdd} from "../pages/admin/vips/VipsAdd";
import {VipsItem} from "../pages/admin/vips/VipsItem";
import {Pools} from "../pages/admin/pools/Pools";
import {PoolAdd} from "../pages/admin/pools/PoolAdd";
import {PoolItem} from "../pages/admin/pools/PoolItem";
import {AddInvest} from "../pages/admin/pools/invest/AddInvest";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/krypta-valyuta/admin" element={<DashBoardLayout/>}>
                    <Route index element={<Main/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/coins"} element={<Coins/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/coins/add"} element={<CoinAdd/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/coins/edit/:id"} element={<CoinAdd/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/vips"} element={<Vips/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/vips/add"} element={<VipsAdd/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/vips/get-one/:id"} element={<VipsItem/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/pool"} element={<Pools/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/pool/add"} element={<PoolAdd/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/pool/get-one/:id"} element={<PoolItem/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/pool/get-one/:id/invest-add"} element={<AddInvest/>}/>
                </Route>
                <Route path={"/auth/login"} element={<Login/>}/>
                <Route path={"*"} element={<NotFoundPages/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
