import Styles from "./NewsBox.module.scss";
import site_one_img from "../../images/landing/news/site_01.png"
import site_two_img from "../../images/landing/news/site_02.png"
import site_three_img from "../../images/landing/news/site_03.png"
import {L} from "../../l10n/L10n"

const NewsBox = () => {
    return (
        <div className={Styles.newsBox}>
            <div className={Styles.box}>
                <a target={"_blank"} href="">
                    <div className={Styles.boxNews}>
                        <div className={Styles.newsImg}>
                            <img src={site_one_img.src} alt="Site 01"/>
                        </div>
                        <div className={Styles.titleNews}>
                            <h4>
                                <strong>{L.news.newsBox.buy_land}</strong>
                            </h4>
                        </div>
                        <div className={Styles.description}>
                            <p>
                                {L.news.newsBox.during_auction}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className={Styles.box}>
                <a target={"_blank"} href="">
                    <div className={Styles.boxNews}>
                        <div className={Styles.newsImg}>
                            <img src={site_two_img.src} alt="Site 02"/>
                        </div>
                        <div className={Styles.titleNews}>
                            <h4>
                                <strong>{L.news.newsBox.grand_land}</strong>
                            </h4>
                        </div>
                        <div className={Styles.description}>
                            <p>
                                {L.news.newsBox.nft_land}
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className={Styles.box}>
                    <a target={"_blank"} href="">
                        <div className={Styles.boxNews}>
                            <div className={Styles.newsImg}>
                                <img src={site_three_img.src} alt="Site 03"/>
                            </div>
                            <div className={Styles.titleNews}>
                                <h4>
                                    <strong>{L.news.newsBox.land_map}</strong>
                                </h4>
                            </div>
                            <div className={Styles.description}>
                                <p>
                                    {L.news.newsBox.land_wealth}
                                </p>
                            </div>
                        </div>
                    </a>
            </div>
        </div>
    );
};

export default NewsBox;