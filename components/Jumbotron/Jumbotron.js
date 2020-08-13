import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel'

const Jumbotron = () => (
    <>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
      alt="First slide"
      height="350px"
      width="95%"
    />
    <Carousel.Caption>
      <h3>Nick Adams Home</h3>
      <p>www.nickadams916.com</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      alt="Third slide"
      height="350px"
    />

    <Carousel.Caption>
      <h3 id="cap-2">Handcrafted artisan bespoke internet</h3>
      <p>916-996-1799</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.sacbee.com/news/local/2iqsyd/picture144069084/alternates/FREE_768/City%20of%20Trees%20Petition"
      alt="Third slide"
      height="350px"
    />

    <Carousel.Caption>
      <h3 id="cap-3">Located in the greater Sacramento area</h3>
      <p>nicholasadams916@gmail.com</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <style jsx>{`
     
        h3 {
            text-align: center;
            color: whitesmoke;
            
        }  
        p {
            color: white;
            margin-bottom: 65px
        } 
        #cap-2 {
            color: white;
           
        }
        #cap-3 {
            color: black;
        }
        `}

        </style>
       
    </>


)
export default Jumbotron;