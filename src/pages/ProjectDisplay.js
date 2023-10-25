import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    function redirect(url) {
        window.location.href = url;
    }

    return (
        <div className="project">  
            <h1> {project.name} </h1>
            <img src={project.image}/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <GithubIcon onClick={() => {redirect("https://github.com/jspnguyen")}}/>
        </div>
    )
}

export default ProjectDisplay