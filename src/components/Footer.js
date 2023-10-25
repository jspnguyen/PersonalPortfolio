import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
    function redirect(url) {
        window.location.href = url;
    }

    return (
        <div className="footer">
            <div className="socialMedia"> 
                <LinkedInIcon onClick={() => {redirect("https://www.linkedin.com/in/jnguyen31/")}}/>
                <EmailIcon onClick={() => {redirect("mailto:josephn@berkeley.edu")}}/>
                <GithubIcon onClick={() => {redirect("https://github.com/jspnguyen")}}/>
            </div>
            <p> &copy; 2023 jspnguyen.com</p>
        </div>
    )
}

export default Footer