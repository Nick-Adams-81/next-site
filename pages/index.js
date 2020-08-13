import Layout from '../components/Layout';
import Links from '../components/Links';
import DogPics from '../components/DogPics/DogPics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Index = () => (
    <Layout>
        <br />
        <div>
            <Container>
                <Row>
                    <Col>
                        <DogPics />
                    </Col>
                   
                   
                    <Col>
                        <br />
                        <p>I am a software developer based out of Sacramento, CA, I specialize in MERN
                        stack technologies. I'm also familiar with vue.js and next.js. My contact info 
                        is all on this page, feel free to contact me if interested in my work!
                        </p>
                    </Col>
                  

                    <Col>
                        <Links />
                    </Col>
                </Row>
            </Container>
            <style jsx>
                {`
                  p {
                      font-size: 20px;
                  }

               `}
            </style>
            
        </div>
    </Layout>




);



export default Index;