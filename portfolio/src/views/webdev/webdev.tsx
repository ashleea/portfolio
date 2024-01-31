import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBoxOpen, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Webdev = () => {

    return (
        <>
        <div>
            <div className="projects">

                <div className="project container">
                    <div className="thumbnail">
                        <img src=""></img>
                    </div>
                    <div>
                        <p className="title"><h1>Mini Calendar</h1></p>
                        <p className="description">
                            A mini calendar view for sidebar use. Includes month by month transitions and event customization.
                        </p>
                        <div className="underlay">
                            <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                                mysql, axios
                            </p>
                        </div>
                    </div>
                </div>

                <div className="project container">
                    <div className="thumbnail">
                        <img src=""></img>
                    </div>
                    <div>
                        <p className="title"><h1>Account System</h1></p>
                        <p className="description">
                            Includes registration, login, profile, settings, directories, and administrative roles.
                        </p>
                        <div className="underlay">
                            <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                                <a href="https://nodejs.org/en">node.js</a>, <a href="https://react.dev/">react</a>, mysql, axios
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Webdev;