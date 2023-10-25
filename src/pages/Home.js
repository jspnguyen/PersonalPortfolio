import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
    function redirect(url) {
        window.location.href = url;
    }

    return (
        <div className="home">
            <div className="about"> 
                <h2>Hi, I'm Joseph Nguyen!</h2>
                <div className="prompt"> 
                    <p>Computer Science Student at UC Berkeley with interests in Full-Stack and General Development</p> 
                    <LinkedInIcon onClick={() => {redirect("https://www.linkedin.com/in/jnguyen31/")}}/>
                    <EmailIcon onClick={() => {redirect("mailto:jnguyen3222@gmail.com")}}/>
                    <GithubIcon onClick={() => {redirect("https://github.com/jspnguyen")}}/>
                </div>
            </div>
            <div className="bio"> 
                <h1> About Me </h1>
                <div className="info">
                    <p>
                        Hey there, I'm Joseph, a current sophomore majoring in Computer Science at UC Berkeley. I have experience 
                        in many different areas of programming such as: Full-Stack, Mobile, Discord Bots, Databases, and much more.
                        I'm always looking to increase my skills in coding and plan to become a Software Engineer in the near future.
                    </p>
                </div>
            </div>
            <div className="skills"> 
                <h1> Skills </h1>
                <ol className="list"> 
                    <li className="item">  
                        <h2> Languages </h2>
                        <span> 
                            Python, Javascript, Java, SQL, C++, HTML/CSS, R, Solidity, Scheme
                        </span>
                    </li>
                    <li className="item">  
                        <h2> Libraries </h2>
                        <span> 
                            React.js, Node.js, React Native, Flask, Discord.py, Pandas, NumPy, Requests, Selenium, Matplotlib
                        </span>
                    </li>
                    <li className="item">  
                        <h2> Utilities/Tools </h2>
                        <span> 
                            AWS, MySQL, MongoDB, Firebase, DynamoDB, Docker, Git/GitHub, Yarn, Vercel, Linux/Unix, NoSQL, MS Office, Agile Methodology
                        </span>
                    </li>
                    <li className="item">  
                        <h2> Soft Skills </h2>
                        <span> 
                            Collaboration, Time Management, High Work Ethic, Communication, Adaptability
                        </span>
                    </li>
                    <li className="item">  
                        <h2> Coursework </h2>
                        <span> 
                        Structure & Interpretations of Computer Programs, Data Structures & Algorithms, C/C++ Programming, Java Programming, 
                        Intro to Cybersecurity, Designing Information Devices and Systems, Discrete Mathematics and Probability Theory, 
                        Probability and Statistics
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home