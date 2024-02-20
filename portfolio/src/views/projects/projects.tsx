import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faBoxOpen, faCalendar } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {

    const assetURL = import.meta.env.VITE_BASE_ASSETS + 'projects/';

    return (
        <>
        <div className="projects">

            <div className="project container">
                <div className="thumbnail">
                    <img src=""></img>
                </div>
                <div className="info">
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
                <div className="info">
                    <p className="title">
                        <h1>Portfolio Website</h1>
                        <div className="green">in development!</div>
                    </p>
                    <p className="description">
                        A portfolio website (where you are now) that hosts information about my career. Hand-coded, hosted on Digital Ocean.
                    </p>
                    <div className="underlay">
                        <p><FontAwesomeIcon icon={faCode} className="icon" /> 
                            HTML, Javascript
                        </p>
                        <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                            <a href="https://nodejs.org/en">Node.js</a>, <a href="https://react.dev/">React</a>
                        </p>
                        <p className="date"><FontAwesomeIcon icon={faCalendar} className="icon" />  
                            Jan 2024 - Now
                        </p>
                        <a href="https://github.com/ashleea/portfolio" className="button-icon"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    </div>
                </div>
            </div>

            <div className="project container">
                <div className="thumbnail">
                    <img src={assetURL + "Thumbnail-EDMSJamestown.PNG"}></img>
                    <img src={assetURL + "Thumbnail-EDMSMartinLuther.PNG"}></img>
                    <img src={assetURL + "Thumbnail-EDMSNativeAmericanTools.PNG"}></img>
                </div>
                <div className="info">
                    <p className="title"><h1>EDMS Class Group Projects</h1></p>
                    <p className="description">
                        Multiple student groups from CSUSB's EDMS class partnered with xREAL Lab to create virtual environments for their class presentations. This would include a github pages website, and multiple Mozilla Hubs rooms. Development included HTML, CSS, and partial blender work to stitch SketchFab models together into an enviornment. <br />SketchFab model credit can be found at the bottom of the Github page, or within attributions of the Mozilla Hubs rooms.
                        <ul>
                            <li>
                                <a href="https://xrealdev.github.io/EDMS-FarmingThenAndNow/">Group 1: Farming Then and Now (Github Page)</a>
                                <ul>
                                    <li>In collaboration with xREAL Staff <a href="https://www.bobbylaudeman.com/">Bobby Laudeman</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://hubs.mozilla.com/scenes/KfCnwPF">Group 2: Native American Tool Collection (Mozilla Hubs)</a>
                                <ul>
                                    <li>In collaboration with xREAL Student <a href="www.linkedin.com/in/andrew-stephen-do-90337a213">Andrew-Stephen Do</a>, and Staff <a href="https://ethanr555.github.io/">Ethan Randolph</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://hubs.mozilla.com/scenes/RLAZXEr">Group 3: Jamestown (Mozilla Hubs)</a>
                                <ul>
                                    <li>In collaboration with xREAL Student <a href="www.linkedin.com/in/andrew-stephen-do-90337a213">Andrew-Stephen Do</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="https://hubs.mozilla.com/scenes/bUWeiih">Group 4: Martin Luther King Jr Gallery (Mozilla Hubs)</a>
                            </li>
                            <li>
                                <a href="https://hubs.mozilla.com/scenes/86oUgQP">Group 5: Native American Gallery (Mozilla Hubs)</a>
                            </li>
                        </ul>

                    </p>
                    <div className="underlay">
                        <p><FontAwesomeIcon icon={faCode} className="icon" /> 
                            HTML
                        </p>
                        <p><FontAwesomeIcon icon={faBoxOpen} className="icon" />
                            <a href="https://hubs.mozilla.com/">Mozilla Hubs</a>, <a href="https://modelviewer.dev/">Google Model Viewer</a>
                        </p>
                        <p className="date"><FontAwesomeIcon icon={faCalendar} className="icon" />  
                            November 2023
                        </p>
                        <a href="https://github.com/xrealdev/EDMS-FarmingThenAndNow" className="button-icon"><FontAwesomeIcon icon={faGithub} className="icon" /></a>
                    </div>
                </div>
            </div>

            <div className="project container">
                <div className="thumbnail">
                    <img src=""></img>
                </div>
                <div className="info">
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