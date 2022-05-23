import Styles from "./Main.module.scss";
import Logo_with_icon from '../../images/logo_with_icon.png'
import PlayBtn from "../PlayBtn/PlayBtn";
import LayoutStyles from "../Layout.module.scss";
import {L} from "../../l10n/L10n"
import {PagePath} from "../../helpers/PageHelper";

const Main = () => {
  return(
     <div className={Styles.mc_middle_content}>
         <div className={LayoutStyles.container}>
             <div className={Styles.logo_container}>
                <img src={Logo_with_icon.src} alt="Logo with icon"/>
                <h5>{L.main.description}</h5>
                <h2>
                    <strong>{L.main.mine_gold}</strong>
                </h2>
            </div>
             <div className={Styles.btn_container_main_page}>
                 <a className={Styles.playBtnBig} href={PagePath.INDEX}>
                     <PlayBtn text={L.main.play_game}/>
                 </a>
                 <a href={PagePath.INDEX}>
                     <button className={Styles.secondPlayBtn}>{L.main.tutorial}</button>
                 </a>
             </div>
             <div className={Styles.container}>
                 <div className={Styles.carouselContainer}>
                     <div className={Styles.carouselContainer}>
                         <div></div>
                         <div></div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  )
}

export default Main