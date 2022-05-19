import img_Gold_rewards from '../../images/landing/gold_rewards.png'
import img_Decentralized from '../../images/landing/decentralized.png'
import img_Market_economy from '../../images/landing/market_economy.png'
import Styles from './Features.module.scss'
import LayoutStyles from "../Layout.module.scss"
import {L} from "../../l10n/L10n"
import Title from "../Title/Title"

const Features = () => {
  return(
      <div className={Styles.features}>
        <div className={LayoutStyles.container}>
            <div className={Styles.featuresContainer}>
                <div className={Styles.hidden}>
                    <Title title={L.features.game_features}/>
                    <div className={Styles.featuresBoxes}>
                        <div className={Styles.boxOne}>
                            <h4 className={Styles.name}>
                                <strong>{L.features.gold_rewards}</strong>
                            </h4>
                            <div className={Styles.image}>
                                <img src={img_Gold_rewards.src} alt="Gold rewards"/>
                            </div>
                            <div className={Styles.description}>
                                <p>{L.features.crypto_gold}</p>
                            </div>
                        </div>
                        <div className={Styles.boxTwo}>
                            <h4 className={Styles.name}>
                                <strong>{L.features.game_world}</strong>
                            </h4>
                            <div className={Styles.image}>
                                <img src={img_Decentralized.src} alt="Decentralized"/>
                            </div>
                            <div className={Styles.description}>
                                <p>{L.features.alternative_reality}</p>
                            </div>
                        </div>
                        <div className={Styles.boxThree}>
                            <h4 className={Styles.name}>
                                <strong>{L.features.market_economy}</strong>
                            </h4>
                            <div className={Styles.image}>
                                <img src={img_Market_economy    .src} alt="Market economy"/>
                            </div>
                            <div className={Styles.description}>
                                <p>{L.features.prices_game}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-xs-12 visible-xs"}></div>

            </div>
        </div>
      </div>
  )
}

export default Features