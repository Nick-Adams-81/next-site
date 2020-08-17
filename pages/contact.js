import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            comments: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Layout>
                <br />
                <Container>
                    <Row>
                        <Col>
                            <form onSubmit={this.handleSubmit} id="form">
                                <label>

                                    <input type="text" id="input-1" placeholder="Name" name={this.state.value} onChange={this.handleChange} />
                                </label>
                                <br />
                                <label>

                                    <input type="text" id="input-2" placeholder="Phone Number" phone={this.state.value} onChange={this.handleChange} />
                                </label>
                                <br />
                                <label>
                                    <input type="text" id="input-3" placeholder="Email" email={this.state.value} onChange={this.handleChange} />
                                </label>
                                <br />
                                    <input type="text" id="comments" placeholder="Comments" comments={this.state.value} onChange={this.handleChange} />
                                <br />
                                    <input type="submit" value="Submit" id="btn" />
                            </form>
                        </Col>
                    </Row>
                    <style jsx>
                        {`
                        #form {
                            display: flex;
                            flex-direction: column;
                        }
                        #input-1 {
                            margin-left: 35%;
                            width: 33%;
                        }
                        #input-2 {
                            margin-left: 35%;
                            width: 33%;
                        }
                        #input-3 {
                            margin-left: 35%;
                            width: 33%;
                        }
                        #btn {
                            margin-left: 42%;
                            width: 20%;
                        }
                        #comments {
                            height: 200px;
                            width: 40%;
                            margin-left: 32%
                        }



                        `}
                    </style>
                </Container>


            </Layout>
        );
    }
}

export default Contact;