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
                        Hello! My name is Ashleea, and I am a software developer and artist based in Southern California. I currently work the most with full stack web development, 3D modeling, and character design.<br />I am currently imagining my career as a combination of technical and artistic design within the realm of education.


                    </div>
                </div>
                <div className="container">
                    
                    <div>
                        I started my career during my time at university, in which I was a computer science tutor for freshman and sophmore level classes. After I graduated, I was offered an internship to continue working on my senior capstone project - a mental health mobile app for a research lab. I then moved to California from Arizona, and continued working in education as an administrative assistant in a VR programming lab for faculty.<br />

                        
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