import ArtSidebar from "../components/artsidebar";

const MovingOut = () => {

    const assetURL = import.meta.env.VITE_BASE_ASSETS + 'art/digital/pixel/movingout/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">
            <h1>Moving Out Game</h1>
                <p>In my last semester of unversity, I was enrolled in a video game class, where within a team we learned to use <a href="https://gamemaker.io/en">Game Maker Studio</a>, a 2D game development engine. I participated as both a developer and the artist for our game assets.<br />
                The premise of the game below was the player had to pick up and move boxes into a moving truck. The boxes would represent different classic Tetris-like shapes, and the player was responsible for fitting them in perfectly.  
                </p>

                <h2>Main Characters</h2>
                <div>
                    <img src={assetURL + 'sprite-player.png'}></img>
                </div>

                <h2>Extra Assets</h2>
                <div>
                    <img src={assetURL + 'sprite-movingtruck.png'}></img>
                </div>

                <h2>In Action</h2>
                <div>
                    <img src={assetURL + 'sprite-player-walkinganimation.gif'}></img>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default MovingOut;