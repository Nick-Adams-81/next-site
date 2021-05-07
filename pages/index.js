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
                    <Col md={12} lg={4}>
                        <DogPics />
                    </Col>

                    <Col md={12} lg={4}>
                        <br />
                        <p>I am a software developer based out of Dallas, TX. I specialize in MERN
                        stack technologies but am familiar with Python, Java, and C#. My contact info 
                        is all on this page, feel free to contact me if interested in my work!
                        </p>
                    </Col>
        
                    <Col md={12} lg={4}>
                        <Links />
                    </Col>
                </Row>
            </Container>
            <style jsx>
                {`
                  p {
                      font-size: 23px;
                  }

               `}
            </style>
            
        </div>
    </Layout>




);



export default Index;