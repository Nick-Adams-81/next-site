import Head from 'next/head';

const Jumbotron = () => (
    <>
        <Head>
            <link rel="stylesheet" href="style.css" />
        </Head>

        <div id="jumbotron">
            <div className="container">
                <img src="https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                     width="100%"
                     height="450">
                </img>
                <h1 className="display-4">Nick Adams Home</h1>
               
                
            </div>
        </div>
        <style jsx>{`
     
        h1 {
            text-align: center;
            
        }   
        `}

        </style>
    </>


)
export default Jumbotron;