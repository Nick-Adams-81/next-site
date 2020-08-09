import Navbar from '../components/Navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Nick Adams</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/spacelab/bootstrap.min.css" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>


    </div>

)
export default Layout;
