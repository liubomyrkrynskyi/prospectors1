import Styles from "./Pgl.module.scss"
import LayoutStyles from "../Layout.module.scss"
import Title from "../Title/Title"
import scheme_pgl_img from "../../images/landing/schema_pgl.png"
import {L} from "../../l10n/L10n"

const Pgl = () => {
    return (
        <div className={Styles.aboutPgl}>
            <div className={Styles.pglContainer}>
                <div className={LayoutStyles.container}>
                    <div className={Styles.pglToken}>
                        <div className={Styles.pglWhat}>
                            <Title title={L.pgl.pgl_token}/>
                            <div className={Styles.desc_content}>
                                <h3>
                                    <strong>What is Prospectors Gold (PGL)?</strong>
                                </h3>
                                <p>
                                    The total amount of PGL is limited - 220 000 000 tokens. This is an approximate amount of all the planet’s gold (mined and unmined).
                                </p>
                                <p>
                                    Half of the general amount – 110 million coins –is located in the game and can be mined. Prospectors gold, is the basis for economic relations among players.
                                </p>
                            </div>
                        </div>
                        <div className={Styles.pglImg}>
                            <div className={Styles.pglScheme}>
                                <img src={scheme_pgl_img.src} alt="Scheme pgl"/>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.aboutBlock}>
                        <p>The blockchain games market is quickly evolving. Yet the lack of high-quality blockchain dapps is noticeable. EOS blockchain was among the first, who has delivered parametres necessary for the big game projects development. Thet’s why eos blockchain became the place, where the early big blockchain games have started to appear. Unfortunately, most of those are gambling projects. That is why Prospectors eos application is standing apart from other blockchain dapps.</p>
                        <p>Prospectors game on eos is the most complex eos dapp among blockchain games developed by now. Thanks to the EOS blockchain smart contract, we managed to deliver to our user unlimited possibilities of the free economy. In-game prices are forming by supply and demand correlation, which is the basic principle of a free-market.</p>
                        <p>The smart contract of the game provides the high-level capacity distinctive for eos games.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pgl;