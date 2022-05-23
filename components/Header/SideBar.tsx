import Styles from "./SideBar.module.scss"

const SideBar = () => {
    return (
        <div className={Styles.menuToggle}>
            <input type="checkbox"/>
            <span/>
            <span/>
            <span/>
            <div className={Styles.menu}>
                <a href="http://google.com">google</a>
                <a href="http://google.com">google</a>
                <a href="http://google.com">google</a>
                <a href="http://google.com">News</a>
                <a href="http://google.com">Twitter</a>
                <a href="http://google.com">Telegram</a>
            </div>
        </div>
    )
}

export default SideBar