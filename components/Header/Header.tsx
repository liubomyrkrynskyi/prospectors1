import mobile_logo_img from '../../images/mobile_logo.png'
import {L} from "../../l10n/L10n"
import Styles from "./Header.module.scss"
import LayoutStyles from "../Layout.module.scss"
import PlayBtn from "../PlayBtn/PlayBtn";

const Header = () => {
    return (
        <div className={Styles.header}>
            <div className={LayoutStyles.container}>
                <div className={Styles.nav}>
                    <div>
                        <a href="components/Header/Header">
                            <img height={"44px"} src={mobile_logo_img.src} alt="mobile logo"/>
                        </a>
                    </div>
                    <div className={Styles.nav_box}>
                        <a href="components/Header/Header">
                            <li>{L.header.links.about_game}</li>
                        </a>
                        <a href="components/Header/Header">
                            <li>{L.header.links.my_assets}</li>
                        </a>
                        <a href="components/Header/Header">
                            <li>{L.header.links.blog}</li>
                        </a>
                        <a href="components/Header/Header">
                            <li>{L.header.links.wiki}</li>
                        </a>
                        <a href="components/Header/Header">
                            <li>{L.header.links.team}</li>
                        </a>
                        <a href="components/Header/Header">
                            <li>{L.header.links.rewards}</li>
                        </a>
                        <a href="components/Header/Header">
                            <li>{L.header.links.faqs}</li>
                        </a>
                    </div>
                    <a href="components/Header/Header">
                        <PlayBtn text={L.header.play_game}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header