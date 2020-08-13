import Layout from '../components/Layout';
import Links from '../components/Links';
import DogPics from '../components/DogPics/DogPics';

const Index = () => (
    <Layout>
        <br />
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <DogPics />
                    </div>
                   
                   
                    <div class="col">
                        <br />
                        <p>I am a software developer based out of Sacramento, CA, I specialize in MERN
                        stack technologies. I'm also familiar with vue.js and next.js. My contact info 
                        is all on this page, feel free to contact me if interested in my work!
                        </p>
                    </div>
                   

                    <div class="col">
                        <Links />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                  p {
                      font-size: 25px;
                  }

               `}
            </style>
            
        </div>
    </Layout>




);



export default Index;