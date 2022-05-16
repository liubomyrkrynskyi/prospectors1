import type {NextPage} from 'next'
import Header from '../components/Header'
import Main from "../components/Main";
import Useful from "../components/Useful";
import MgContainer from "../components/mgcontainer";
import Features from "../components/Features";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout title={"Prospectors"}>
            <Main/>
            <Useful/>
            <MgContainer/>
            <Features/>
        </Layout>
    )
}

export default Home
