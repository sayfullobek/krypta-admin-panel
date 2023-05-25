import {Link} from "react-router-dom";

export const NotFoundPages = () => {
    const token = localStorage.getItem("token")
    return (
        <div>
            404
            <Link to={"/auth/krypta-valyuta/admin"}>
                orqaga
            </Link>
        </div>
    )
}