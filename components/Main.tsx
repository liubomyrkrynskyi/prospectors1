import Logo_with_icon from '../images/logo_with_icon.png'

const Main = () => {
  return(
     <div className={"mc_middle_content"}>
        <div className={"logo-container"}>
            <img width={"100%"} src={Logo_with_icon.src} alt="Logo with icon"/>
            {/*TODO @liubomyrkrynskyi you should not use inline style*/}
            <h5 margin-top={"10px"}>Massive Multiplayer Online Real-Time Economic Strategy Game </h5>
            <h2>
                <strong>MINE GOLD - BUILD YOUR WORLD</strong>
            </h2>
        </div>
         <div className={"btn_container_main_page"}>
             <a href="">
                 <button className={"play_btn bigGame_btn btn_disabled"}>PLAY GAME</button>
             </a>
             <a href="">
                 <button className={"play_btn second_play_btn bigGame_btn"}>Tutorial</button>
             </a>
         </div>
         <div className={"container"}>
             <div className={"row carousel_container"}>
                 <div className={""}></div>
             </div>
         </div>
     </div>
  )
}

export default Main