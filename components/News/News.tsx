import Styles from "./News.module.scss"
import Title from "../Title/Title";
import {L} from "../../l10n/L10n"


const News = () => {
    return (
        <div className={Styles.news}>
            <div className={Styles.container}>
                <Title title={L.news.latest_news}/>
                <div className={Styles.newsBox}></div>
            </div>
        </div>
    );
};

export default News;