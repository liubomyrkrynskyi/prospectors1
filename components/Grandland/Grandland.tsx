import Styles from "../Grandland/Grandland.module.scss"
import Grand_land_img from "../../images/landing/grand_land_img.png"
import LayoutStyles from "../Layout.module.scss"
import PlayBtn from "../PlayBtn/PlayBtn";
import {L} from "../../l10n/L10n"

const Grandland = () => {
    return (
        <div className={Styles.grandLand}>
            <div className={LayoutStyles.container}>
                <div className={Styles.grandLandContainer}>
                    <img className={Styles.grandLandImg} src={Grand_land_img.src} alt="Grand_land_img"/>
                    <div className={Styles.grandLandAmountLabel}>
                        {L.grandLand.prospectors_gold}
                    </div>
                    <div className={Styles.grandLandAmountValue}>
                        {L.grandLand.number_gold}
                    </div>
                    <a className={Styles.playBtnBig} href="">
                        <PlayBtn text={L.grandLand.play_game}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Grandland;