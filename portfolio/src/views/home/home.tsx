import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {

    return (
        <>
        <div className="home">
            <div className="sidebar">
                <div id="intro">
                    <img id="avatar"src="src/assets/avatar.png" />
                    <div className="chatbubble">
                        <p>Meet me!</p>
                    </div>
                </div>
                <div className="container">
                    <div id="homeicons">
                        <a className="icon" href="https://www.linkedin.com/in/ashleea-holloway-7358b6192"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className="icon" href="https://github.com/ashleea"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="icon" href="mailto:ashleeaholloway@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                    <div>
                        Hello! My name is Ashleea, and I am a software developer and artist based in Southern California. I currently work the most with full stack web development, 3D modeling, and character design.<br />


                    </div>
                </div>
                <div className="container">
                    <div id="homeicons">
                        <a className="icon" href="https://www.linkedin.com/in/ashleea-holloway-7358b6192"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className="icon" href="https://github.com/ashleea"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="icon" href="mailto:ashleeaholloway@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                    <div>
                        I started my technical and educational career during my time at university, in which I was  <br />

                        
                    </div>
                </div>
            </div>
            <div className="mainbar container">

            </div>
        </div>
        </>
    );
}

export default Home;