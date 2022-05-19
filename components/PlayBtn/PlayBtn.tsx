import Styles from "./PlayBtn.module.scss"

const PlayBtn = (
    {
        text
    }:{
        text: string
    }
) => {

    return (
        <>
            <button className={Styles.playBtn}>{text}</button>
        </>
    )
}

export default PlayBtn