import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBoxOpen, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

    return (
        <>
        <div className="projects">

            <div className="project container">
                <div className="thumbnail">
                    <img src=""></img>
                </div>
                <div>
                    <p className="title">
                        <h1>Trading Card Game Website</h1>
                        <div className="green">in development!</div>
                    </p>
                    <p className="description">
                        A TCG designed to be community run. The website includes or is planned to include various functionality including accounts, directories, calendars, trading, forumns, mini web games, store system with currency, inventories, badge earning, and more.
                    </p>
                    <div className="underlay">
                        <p><FontAwesomeIcon icon={faCode} className="icon" /> 
                            HTML, Javascript
                        </p>
                        <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                            <a href="https://nodejs.org/en">Node.js</a>, <a href="https://react.dev/">React</a>
                        </p>
                        <p className="date"><FontAwesomeIcon icon={faCalendar} className="icon" />  
                            Jan 2023 - Now
                        </p>
                        <a href="/" className="button-icon"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    </div>
                </div>
            </div>

            <div className="project container">
                <div className="thumbnail">
                    <img src=""></img>
                </div>
                <div>
                    <p className="title"><h1>EDMS Class Group Projects</h1></p>
                    <p className="description">
                        Multiple student groups from CSUSB's EDMS class partnered with xREAL Lab to create virtual environments for their class presentations. This would include a github pages website, and multiple mozilla hubs rooms.
                    </p>
                    <div className="underlay">
                        <p><FontAwesomeIcon icon={faCode} className="icon" /> 
                            HTML
                        </p>
                        <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                            <a href="">Mozilla Hubs</a>, <a href="">Google Model Viewer</a>
                        </p>
                        <p className="date"><FontAwesomeIcon icon={faCalendar} className="icon" />  
                            November 2023
                        </p>
                        <a href="/" className="button-icon"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    </div>
                </div>
            </div>

            <div className="project container">
                <div className="thumbnail">
                    <img src=""></img>
                </div>
                <div>
                    <p className="title"><h1>Discord Bots</h1></p>
                    <p className="description">
                        Combination of bots run on a Raspberry Pi 3. Provides services to a discord server for a MMO (massively multiplayer online video game). Various commands are available to view game and guild information. Includes a currency system and rank-up system.
                    </p>
                    <div className="underlay">
                        <p><FontAwesomeIcon icon={faCode} className="icon" /> 
                            Javascript
                        </p>
                        <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                            <a href="https://discord.js.org/">Discord.js</a>
                        </p>
                        <p className="date"><FontAwesomeIcon icon={faCalendar} className="icon" />  
                            2020 - 2022
                        </p>
                        <a href="/" className="button-icon"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}

export default Projects;