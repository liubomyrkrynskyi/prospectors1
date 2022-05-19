import buy_plots_img from "../../images/landing/useful_link_list/buy_plots.png"
import but_pgl_img from "../../images/landing/useful_link_list/buy_pgl.png"
import {L} from "../../l10n/L10n"

const Useful = () => {

    return (
        <div className={"useful_link_wrapper"}>
            <div className={"useful_link_list"}>
                <div className={"useful_link_item"}>
                    <img className={"useful_link_item_img"} src={buy_plots_img.src} alt="Buy plots"/>
                    <div className={"useful_link_item_title"}>{L.useful.grand_land}</div>
                    <a target={"_blank"} className={"play_btn"} href="components/Useful/Useful">{L.useful.buy_here}</a>
                </div>
                <div className={"useful_link_item"}>
                    <img className={"useful_link_item_img"} src={but_pgl_img.src} alt="Buy pgl"/>
                    <div className={"useful_link_item_title"}>{L.useful.swap_wax}</div>
                    <a target={"_blank"} className={"play_btn"} href="components/Useful/Useful">
                        {L.useful.swap_here}
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Useful