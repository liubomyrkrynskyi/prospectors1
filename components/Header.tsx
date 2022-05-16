import mobile_logo_img from '../images/mobile_logo.png'
import {L} from "../l10n/L10n"
import Styles from "./Header.module.scss"

const Header = () => {
    return (
        //TODO @liubomyrkrynskyi why the class name is capitalized
        <div className={Styles.Header}>
            <div className={Styles.container}>
                <div>
                    <a href="">
                        <img height={"44px"} src={mobile_logo_img.src} alt="mobile logo"/>
                    </a>
                </div>
                <div className={Styles.nav_box}>
                    <a href="">
                        <li>{L.header.links.about_game}</li>
                    </a>
                    <a href="">
                        <li>{L.header.links.my_assets}</li>
                    </a>
                    <a href="">
                        <li>{L.header.links.blog}</li>
                    </a>
                    <a href="">
                        <li>{L.header.links.wiki}</li>
                    </a>
                    <a href="">
                        <li>{L.header.links.team}</li>
                    </a>
                    <a href="">
                        <li>{L.header.links.rewards}</li>
                    </a>
                    <a href="">
                        <li>{L.header.links.faqs}</li>
                    </a>
                </div>
                <a href="">
                    <button className={Styles.play_btn}>{L.header.play_game}</button>
                </a>
            </div>
        </div>
    )
}

export default Header