import img_Gold_rewards from '../images/landing/gold_rewards.png'

const Features = () => {
  return(
      <div className={"features_container"}>
        <div className={"container features_container"}>
            <div className={"row"}>
                <div className={"col-xs-12 hidden-xs"}>
                    <div className={"title"}>
                        <h2 className={"text-center"}></h2>
                        <span>title_icon</span>
                        <span>GAME FEATURES</span>
                        <span>title_icon</span>
                        <p>Prospectors is the first of its kind MMO dapp, economic strategy, and crypto game, where you can find own way and reach your goals. This blockchain dapp will let you try yourself in business development during the Gold Rush Epoque and building your social network.</p>

                    </div>
                    <div className={"features_container text-center"}>
                        <div className={"col-sm-4 box"}>
                            <h4 className={"name"}>
                                <strong>Get Crypto Gold Rewards</strong>
                            </h4>
                            <div className={"Image"}>
                                <img src={img_Gold_rewards.src} alt="Gold rewards"/>
                            </div>
                            <div className={"description"}>
                                <p>Play the game, earn crypto GOLD, spend it in-game or invest in the new prosperous business.</p>
                            </div>
                        </div>
                        <div className={"col-sm-4 box"}></div>
                        <div className={"col-sm-4 box"}></div>
                    </div>
                </div>
                <div className={"col-xs-12 visible-xs"}></div>

            </div>
        </div>
      </div>
  )
}

export default Features