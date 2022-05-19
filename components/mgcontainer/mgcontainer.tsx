import mgc_img from '../../images/landing/mgc_image.png'
import Styles from '../mgcontainer/mgcontainer.module.scss'
import LayoutStyles from "../Layout.module.scss"
import PlayBtn from "../PlayBtn/PlayBtn";
import {L} from "../../l10n/L10n"

const MgContainer = () => {

    return (
        <div className={Styles.mgContainer}>
            <div className={LayoutStyles.container}>
                <div className={Styles.mgContainer}>
                    <div className={Styles.mgInfoBlock}>
                        <h2>{L.mgContainer.what_is_prospectors}</h2>
                        <div className={Styles.mgContainerText}>
                            <p>
                                {L.mgContainer.description_game}
                                <br/>
                                <br/>
                                {L.mgContainer.thrilling_life}
                            </p>
                        </div>
                        <div className={Styles.btnPosition}>
                            <a href="components/mgContainer/mgContainer">
                                <div className={Styles.btnPlay}>
                                    <PlayBtn text={L.mgContainer.read_more}/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={Styles.mgImg}>
                        <img src={mgc_img.src} alt="Mgc_image"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MgContainer