import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneAbout} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Loader} from "../../../component/Loader";
import {Button} from "reactstrap";
import {Card, CardImg} from "react-bootstrap";
import {DeleteModal} from "../../../component/DeleteModal";

export const VipsItem = () => {
    const id = useParams().id
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [vips, setVips] = useState({})
    const getOne = async () => {
        try {
            await getOneAbout(Apis.vip, id, setVips, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getOne()
    }, [])
    return (
        <div>
            {loading ? (
                <div className={"row"}>
                    <div className="col col-12">
                        <Link to={"/auth/krypta-valyuta/admin/vips"}
                              className={"btn btn-info m-2"}>
                            orqaga
                        </Link>
                        <Button color={"danger"} className={"m-2"} onClick={() => setModal(true)}>
                            o'chirish
                        </Button>
                        <Link to={""} className={"btn btn-warning m-2"}>
                            taxrirlash
                        </Link>
                    </div>
                    <div className="col col-12">
                        <h1 className={"text-center"}>[{vips.name}]</h1>
                    </div>
                    <div className={"row col-12 mt-3"}>
                        <div className="col-12 col-md-6">
                            <Card inverse>
                                <CardImg
                                    alt="Card image cap"
                                    src={Apis.getPhoto + vips.photoId}
                                    style={{
                                        height: "60vh"
                                    }}
                                    width="100%"
                                />
                            </Card>
                        </div>
                        <div className="col-12 col-md-6">
                            <h5 className={"m-3"}>vip uchun minimum pul miqdori : {vips.minQuantifyAmount}</h5>
                            <h5 className={"m-3"}>vip uchun maximal pul miqdori : {vips.maxQuantifyAmount}</h5>
                            <h5 className={"m-3"}>vip uchun ulush miqdori : {vips.shareRatio}</h5>
                            <h5 className={"m-3"}>samarali miqdor : {vips.effectiveEmount}</h5>
                            <h5 className={"m-3"}>a'zolarni bevosita targib qilish : {vips.directlyPromoteMembers}</h5>
                            <h5 className={"m-3"}>ikkinchi va uchinchi avlod vakillari
                                : {vips.secondThridGenerationMembers}</h5>
                            <h5 className={"m-3"}>foyda : {vips.profits}</h5>
                            <h5 className={"m-3"}>robotlari kuniga mavjud : {vips.metaGORobotsAvailablePerDay}</h5>
                            <h5 className={"m-3"}>jamoa mukofoti foizi : {vips.teamAward}</h5>
                            <h5 className={"m-3"}>ushbu vip faolmi yoki yo'q : <span
                                className={vips.active ? "bg-success text-light" : "bg-danger text-light"}>{vips.active ? "faol" : "faol emas"}</span>
                            </h5>
                        </div>
                    </div>
                    <DeleteModal id={id} modal={modal} setModal={setModal} url={Apis.vip} getAll={getOne} navigateName={"/auth/krypta-valyuta/admin/vips"}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}