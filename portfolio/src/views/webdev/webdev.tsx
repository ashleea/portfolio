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
                    <div className="info">
                        <p className="title"><h1>Blogging System</h1></p>
                        <p className="description">
                            Users can post, edit, emote react, like, comment, and delete related data. Administrators can pin messages to be seen first.
                            For use in a game style system, claimables on a time limit are available.
                        </p>
                        <div className="underlay">
                            <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                                SQL, Axios
                            </p>
                        </div>
                    </div>
                </div>

                <div className="project container">
                    <div className="thumbnail">
                        <img src=""></img>
                    </div>
                    <div className="info">
                        <p className="title"><h1>Mini Calendar</h1></p>
                        <p className="description">
                            A mini calendar view for sidebar use. Includes month by month transitions and event customization.
                        </p>
                        <div className="underlay">
                            <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                                SQL, Axios
                            </p>
                        </div>
                    </div>
                </div>

                <div className="project container">
                    <div className="thumbnail">
                        <img src=""></img>
                    </div>
                    <div className="info">
                        <p className="title"><h1>Account System</h1></p>
                        <p className="description">
                            Includes registration, login, profile, settings, directories, and administrative roles. Utilizes pashword hashing, JSON Web Tokens, Cookies, and role-restricted routes.
                        </p>
                        <div className="underlay">
                            <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                                <a href="https://nodejs.org/en">Node.js</a>, <a href="https://react.dev/">React</a>, <a href="https://jwt.io/">JWT</a>, SQL, Axios
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