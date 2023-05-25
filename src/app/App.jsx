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
import {Notification} from "../pages/admin/notification/Notification";
import {NotificationSend} from "../pages/admin/notification/NotificationSend";
import {SendMessage} from "../pages/admin/notification/SendMessage";
import {Message} from "../pages/admin/notification/Message";
import {Help} from "../pages/admin/help/Help";
import {HelpAdd} from "../pages/admin/help/HelpAdd";
import {HistoryMoney} from "../pages/admin/historyKirim/HistoryMoney";
import {SendMoneyByAdmin} from "../pages/admin/historyKirim/SendMoneyByAdmin";
import {HistoryMoneyExit} from "../pages/admin/historyKirim/HistoryMoneyExit";
import {WithdrawalRequest} from "../pages/admin/historyMoneyExit/WithdrawalRequest";
import {WithdrawalExit} from "../pages/admin/historyMoneyExit/WithdrawalExit";
import {FedbackHistory} from "../pages/admin/fedback/FedbackHistory";
import {UsersList} from "../pages/admin/users/UsersList";
import {UsersItem} from "../pages/admin/users/UsersItem";

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
                    <Route path={"/auth/krypta-valyuta/admin/notification"} element={<Notification/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/notification/send-all"} element={<NotificationSend/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/notification/send-message/:id"}
                           element={<Message/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/notification/send-message/:id/add"}
                           element={<SendMessage/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/help"} element={<Help/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/help/add"} element={<HelpAdd/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/history/pay"} element={<HistoryMoney/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/history/exit-pay"} element={<HistoryMoneyExit/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/history/pay/send-money/:archiveId"}
                           element={<SendMoneyByAdmin/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/history/withdrawal-request"}
                           element={<WithdrawalRequest/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/history/withdrawal-request-exit"}
                           element={<WithdrawalExit/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/history/feedback"}
                           element={<FedbackHistory/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/users-list"}
                           element={<UsersList/>}/>
                    <Route path={"/auth/krypta-valyuta/admin/users-list/:userId"}
                           element={<UsersItem/>}/>
                    <Route path={"*"} element={<NotFoundPages/>}/>
                </Route>
                <Route path={"/auth/login"} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
