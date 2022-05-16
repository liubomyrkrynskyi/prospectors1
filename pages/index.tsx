import type {NextPage} from 'next'
import Header from '../components/Header'
import Main from "../components/Main";
import Useful from "../components/Useful";
import MgContainer from "../components/mgcontainer";
import Features from "../components/Features";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Useful/>
            <MgContainer/>
            <Features/>
        </>
    )
}

export default Home
