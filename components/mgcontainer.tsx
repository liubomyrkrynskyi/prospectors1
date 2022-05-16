import mgc_img from '../images/landing/mgc_image.png'

const MgContainer = () => {

    return(
   <div id={"mg_container"}>
       <div className={"container"}>
           <div className={"mg_container"}>
               <div className={"mg_info_block "}>
                   <h2>WHAT IS PROSPECTORS?</h2>
                   <div className={"mg_container"}>
                       <p>
                           Plunge into the 19th century Gold Rush atmosphere from your device! This exciting game of strategy gives players endless opportunities to earn crypto gold by utilizing blockchain technology. Here you can start a business and explore a world teeming with resources there for the taking.

                           Experience the thrilling life of a Gold miner looking to strike it rich!
                       </p>
                   </div>
                   <div className={"btn_position"}>
                       <a href="">
                           <button className={"play_btn"}>READ MORE</button>
                       </a>
                   </div>
               </div>
               <div className={"mg_img"}>
                   <img src={mgc_img.src} alt="Mgc_image"/>
               </div>
           </div>
       </div>
   </div>
  )

}

export default MgContainer