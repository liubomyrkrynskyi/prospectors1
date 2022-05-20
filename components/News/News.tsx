import Styles from "./News.module.scss"
import Title from "../Title/Title";
import {L} from "../../l10n/L10n"
import NewsBox from "./NewsBox";
import LayoutStyles from "../Layout.module.scss";


const News = () => {
    return (
        <div className={Styles.news}>
            <div className={LayoutStyles.container}>
                <Title title={L.news.latest_news}
                description={L.news.latest_prospectors}/>
                <NewsBox/>
            </div>
        </div>
    );
};

export default News;