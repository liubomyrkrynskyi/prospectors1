import mobile_logo_img from '../images/mobile_logo.png'

const Header = () => {
    return (
        //TODO @liubomyrkrynskyi why the class name is capitalized
        <div className={"Header"}>
            <div className={"container"}>
                <div className={"logo_box"}>
                    <a href="">
                        <img height={"44px"} src={mobile_logo_img.src} alt="mobile_logo"/>
                    </a>
                </div>
                <div className={"nav_box"}>
                    <a href="">
                        <li>About game</li>
                    </a>
                    <a href="">
                        <li>My assets</li>
                    </a>
                    <a href="">
                        <li>Blog</li>
                    </a>
                    <a href="">
                        <li>Wiki</li>
                    </a>
                    <a href="">
                        <li>Time</li>
                    </a>
                    <a href="">
                        <li>Rewards</li>
                    </a>
                    <a href="">
                        <li>FAQS</li>
                    </a>
                </div>
                <a href="">
                    <button className={"play_btn"}>PLAY GAME</button>
                </a>
            </div>
        </div>
    )
}

export default Header