import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import fetch from 'isomorphic-unfetch';




const Portfolio = () => (
    <Layout>
        <>
        <h2>Hi there</h2>
        <ProjectCard />
        
        </>
    </Layout>
);

//Portfolio.getInitialProps = async function() {
   // const res = await fetch("https://github.com/thebigdeal916/next-site/blob/master/components/ProjectCard/projects.json");
    
    //console.log(res)

    //return {
     // res: res
      
   // }
//}


export default Portfolio;