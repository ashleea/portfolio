import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBoxOpen, faCalendar } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const assetURL = '/assets/projects/';

    return (
        <>
        <div className="home">
            <div className="sidebar">
                <div id="intro">
                    <img id="avatar"src="/assets/art/digital/humangirl-stylized.jpg" />
                </div>
                <div className="container">
                    <div id="homeicons">
                        <a className="icon" href="https://www.linkedin.com/in/ashleea-holloway-7358b6192"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className="icon" href="https://github.com/ashleea"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="icon" href="mailto:ashleeaholloway@outlook.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                    <div>
                        <p>Hello! My name is Ashleea, and I am a software developer and artist based in Southern California. I currently work the most with full stack web development, 3D modeling, and character design.<br />I am currently imagining my career as a combination of technical and artistic design within the realm of education.</p>


                    </div>
                </div>
                <div className="container">
                    
                    <div>
                    <p>I started my career during my time at university, in which I was a computer science tutor for freshman and sophmore level classes. After I graduated, I was offered an internship to continue working on my senior capstone project - a mental health mobile app for a research lab. I then moved to California from Arizona, and continued working in education as an administrative assistant in a VR programming lab for faculty.</p>

                        
                    </div>
                </div>
            </div>
            <div className="mainbar">
                <div className="projects">

                <div className="project container">
                    <div className="info">
                        <p className="title">
                            <h1>Trading Card Game Website</h1>
                            <div className="green">in development!</div>
                        </p>
                        <p className="description">
                            A TCG designed to be community run. The website is currently planned to include various functionality including accounts, directories, calendars, trading, forumns, mini web games, store system with currency, inventories, badge earning, and more. <br></br>
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
                    <p className="title"><h1>EDMS Class Group Projects</h1></p>
                    <div className="thumbnail">
                        <img src={assetURL + "Thumbnail-EDMSJamestown.PNG"}></img>
                        <img src={assetURL + "Thumbnail-EDMSMartinLuther.PNG"}></img>
                        <img src={assetURL + "Thumbnail-EDMSNativeAmericanTools.PNG"}></img>
                    </div>
                    <div className="info">
                        
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
            </div>
        </div>
        </>
    );
}

export default Home;