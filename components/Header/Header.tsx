import mobile_logo_img from '../../images/mobile_logo.png'
import {L} from "../../l10n/L10n"
import Styles from "./Header.module.scss"
import LayoutStyles from "../Layout.module.scss"
import PlayBtn from "../PlayBtn/PlayBtn";
import {PagePath} from "../../helpers/PageHelper";
import {useState} from "react";

const Header = () => {
    let [menu, setMenu] = useState(false);

    return (
        <div className={Styles.header}>
            <div className={LayoutStyles.container}>
                <div className={Styles.nav}>
                    <div>
                        <a href={PagePath.INDEX}>
                            <img height={"44px"} src={mobile_logo_img.src} alt="mobile logo"/>
                        </a>
                    </div>
                    <div className={Styles.nav_box}>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.about_game}</li>
                        </a>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.my_assets}</li>
                        </a>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.blog}</li>
                        </a>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.wiki}</li>
                        </a>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.team}</li>
                        </a>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.rewards}</li>
                        </a>
                        <a href={PagePath.INDEX}>
                            <li>{L.header.links.faqs}</li>
                        </a>
                    </div>
                    <a className={Styles.playBtnHeader} href={PagePath.INDEX}>
                        <PlayBtn text={L.header.play_game}/>
                    </a>
                </div>
            </div>
            <div className={Styles.mobMenu} onClick={() => setMenu(!menu)}>
                <div className={Styles.menu}>
                    {menu &&
                    <div>
                        menu
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header