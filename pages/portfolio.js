import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';





const Portfolio = () => (
    <Layout>
        <br />
        <>
            <Container>
                <Row>
                    <Col>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTglSaxJ22LW4jKkUhhgxEQ5XIbSFWQ9s5mHA&usqp=CAU"
                            class="img-fluid" alt="Responsive image" height="350" width="350" />
                        <br />
                        <br />
                        <div className="clockin-btn">
                            <Button variant="primary" href="https://gentle-springs-48433.herokuapp.com/" class="btn btn-primary btn-lg active" role="button"
                                aria-pressed="true">Clockin app</Button>
                        </div>
                    </Col>
                    <br />
                    <Col>
                        <img
                            src="https://www.clipartmax.com/png/full/138-1388309_pub-quiz-trivia-night-new-member-mixer-question-mark-icon.png"
                            class="img-fluid" alt="Responsive image" height="350" width="350" />
                        <br />
                        <br />

                        <div className="quiz-btn">
                            <Button variant="primary" href="https://thebigdeal916.github.io/quiz-app/" class="btn btn-primary btn-lg active" role="button"
                                aria-pressed="true">Quiz app</Button>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61U0tfkvcmL._SX466_.jpg" class="img-fluid"
                            alt="Responsive image" height="350" width="350" />
                        <br />
                        <br />
                        <div className="nirvana-btn">
                            <Button variant="primary" href="https://thebigdeal916.github.io/holiday-work/" class="btn btn-primary btn-lg active" role="button"
                                aria-pressed="true">Nirvana Fansite</Button>
                        </div>
                    </Col>
                    <br />
                    <Col>
                        <img
                            src="https://cdn11.bigcommerce.com/s-70184/images/stencil/350x350/products/3033/7376/blind-tiger-poker-set__76587.1528824562.jpg?c=2"
                            class="img-fluid" alt="Responsive image" />
                        <br />
                        <br />
                        <div className="gambler-btn">
                            <Button variant="primary" href="https://thebigdeal916.github.io/Casino-game/" class="btn btn-primary btn-lg active" role="button"
                                aria-pressed="true">The Gambler</Button>
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <img
                            src="https://images.unsplash.com/photo-1554741458-08edc3611229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            class="img-fluid" alt="Responsive image" height="350" width="350" />
                        <br />
                        <br />
                        <div className="tetris-btn">
                            <Button variant="primary" href="https://thebigdeal916.github.io/My-Tetris/" class="btn btn-primary btn-lg active" role="button" 
                                aria-pressed="true">My Tetris</Button>
                        </div>
                    </Col>
                    <br />
                    <Col>
                        <img
                            src="https://www.pilotonline.com/resizer/Y60USL8S7mzQYMLxz33oDpMdB9c=/415x414/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/TSOIZTNY7NH4JLGPN6HL6VEXFY.png"
                            class="img-fluid" alt="Responsive image" height="350" width="350" />
                        <br />
                        <br />
                        <div className="scheduler-btn">
                            <Button variant="primary" href="https://whispering-fjord-97203.herokuapp.com/" class="btn btn-primary btn-lg active" role="button"
                                aria-pressed="true">JS Scheduler</Button>
                        </div>
                    </Col>
                </Row>

            </Container>

            <style jsx>
                {`
                .clockin-btn {
                    margin-left: 24%;
                        }
                .quiz-btn {
                            margin-left: 28%;
                        }
                .nirvana-btn {
                    margin-left: 22%;
                }
                .gambler-btn {
                    margin-left: 25%
                }
                .tetris-btn {
                    margin-left: 26%;
                }
                .scheduler-btn {
                    margin-left: 26%;
                }
                
                
                
                `}
            </style>


        </>
    </Layout>
);




export default Portfolio;