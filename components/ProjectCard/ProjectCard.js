
import projects from './projects.json';

const ProjectCard = (props) => {

return (
    <>
        <div className="img-container">
            <img src={props.image} alt="something" />
        </div>
        <a href={props.link} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">{props.name}</a>
        <br />
        <style jsx>{`
        .img-container {
            margin-left:70px;
        }
        .btn {
            margin-left: 80px;
        }
         `}</style>
    </>


)
    }

export default ProjectCard;