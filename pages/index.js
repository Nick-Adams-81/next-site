import Layout from '../components/Layout';
import Button from 'react-bootstrap/Button'

const Index = () => (
    <Layout>
        <br />
        <div>
            <div class="container">
                <div class="row">
                    <div class="col"></div>
                   
                    <div class="col">
                        <br />
                        <p>I am a software developer based out of Sacramento, CA, I specialize in MERN
                        stack technologies.
                        </p>
                    </div>

                    <div class="col">
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg"
                            height="180"
                            width="180px" />
                           <br />
                           <br />
                           <div id="btn-1">
                           <Button variant="primary" href="https://github.com/thebigdeal916">GitHub</Button>
                           </div>
                        
                        
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                
               `}
            </style>
        </div>
    </Layout>




);



export default Index;