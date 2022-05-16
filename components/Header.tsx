import mobile_logo_img from '../images/mobile_logo.png'
import {L} from "../l10n/L10n"

const Header = () => {
    return (
        //TODO @liubomyrkrynskyi why the class name is capitalized
        <div className={"Header"}>
            <div className={"container"}>
                <div className={"logo_box"}>
                    <a href="">
                        <img height={"44px"} src={mobile_logo_img.src} alt="mobile logo"/>
                    </a>
                </div>
                <div className={"nav_box"}>
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
                    <button className={"play_btn"}>{L.header.play_game}</button>
                </a>
            </div>
        </div>
    )
}

export default Header