import type {NextPage} from 'next'
import Main from "../components/Main/Main";
import Useful from "../components/Useful/Useful";
import MgContainer from "../components/mgcontainer/mgcontainer";
import Features from "../components/Features/Features";
import Grandland from "../components/Grandland/Grandland";
import News from "../components/News/News"
import Pgl from "../components/Pgl/Pgl"
import Layout from "../components/Layout";
import Styles from "../components/Layout.module.scss";

const Home: NextPage = () => {
    return (
        <Layout title={"Prospectors"}>
            <Main/>
            <Useful/>
            <MgContainer/>
            <Features/>
            <Grandland/>
            <News/>
            <Pgl/>
            <div className={Styles.container}></div>
        </Layout>
    )
}

export default Home
