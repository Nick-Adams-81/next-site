import Navbar from './Navbar/Navbar';
import Head from 'next/head';
import Jumbotron from './Jumbotron/Jumbotron';
import Footer from './Footer/Footer'

const Layout = (props) => (
    <div>
        <Head>
            <title>Nick Adams</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/spacelab/bootstrap.min.css" />
        </Head>
        <div className="body">
            <div className="container">
                <Jumbotron />
                {props.children}
            </div>
            <br />
            <Navbar />
            <Footer />
        </div>
        <style jsx>{`
  .body {
      background-image: url('https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
      width: 100%;
  }
`}</style>

    </div>

)
export default Layout;
