import Styles from "./Pgl.module.scss"
import LayoutStyles from "../Layout.module.scss"
import Title from "../Title/Title"
import scheme_pgl_img from "../../images/landing/schema_pgl.png"
import {L} from "../../l10n/L10n"

const Pgl = () => {
    return (
        <div className={Styles.aboutPgl}>
            <div className={Styles.pglContainer}>
                <div className={LayoutStyles.container}>
                    <div className={Styles.pglToken}>
                        <div className={Styles.pglWhat}>
                            <Title title={L.pgl.pgl_token}/>
                        </div>
                        <div className={Styles.pglImg}>
                            <div className={Styles.pglScheme}>
                                <img src={scheme_pgl_img.src} alt="Scheme pgl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pgl;