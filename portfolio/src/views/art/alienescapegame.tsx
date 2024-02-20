import ArtSidebar from "../components/artsidebar";

const AlienEscape = () => {

    const assetURL = import.meta.env.VITE_BASE_ASSETS + 'art/digital/pixel/alienescape/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">
                <h1>Alien Escape Game</h1>
                <p>In my last semester of unversity, I was enrolled in a video game class, where within a team we learned to use <a href="https://gamemaker.io/en">Game Maker Studio</a>, a 2D game development engine. I participated as both a developer and the artist for our game assets.<br />
                The premise of the game below was the player represented a green alien that needed to escape the capture of scientists. The player had a grappling hook to move around, and would need to avoid laser beams and security guards around the lab enviornment. Along the way, the player would need to collect hamsters before reaching the end goal - the spaceship. 
                </p>

                <h2>Main Characters</h2>
                <div>
                    <img src={assetURL + 'sprite-alien.png'}></img>
                    <img src={assetURL + 'sprite-securityguard.png'}></img>
                </div>

                <h2>Tilesets</h2>
                <div>
                    <img src={assetURL + 'tileset.png'}></img>
                </div>

                <h2>Extra Assets</h2>
                <div>
                    <img src={assetURL + 'titlescreenjail.png'}></img>
                </div>

                <h2>In Action</h2>
                <div>
                    <img src={assetURL + 'sprite-endscreen.gif'}></img>
                </div>

            </div>

        </div>
        </>
    );
}

export default AlienEscape;