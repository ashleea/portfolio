
import { faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Webdev = () => {

    return (
        <>
        <div>
            <div className="projects">
                <div className="project container">
                    <div className="info">
                        <p className="title"><h1>Blogging System</h1></p>
                        <p className="description">
                            Users can post, edit, comment, and delete related data. Administrators can pin messages to be seen first on the blog site's main homepage.
                        </p>
                        <div className="underlay">
                            <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                                SQL, Axios
                            </p>
                        </div>
                    </div>
                </div>

                <div className="project container">
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
                    <div className="info">
                        <p className="title"><h1>Account System</h1></p>
                        <p className="description">
                            Includes registration, login, profile, settings, directories, and administrative roles. Utilizes password hashing, JSON Web Tokens, Cookies, and role-restricted routes.
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