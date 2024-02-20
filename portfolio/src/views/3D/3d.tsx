
const ThreeD = () => {

    const assetURL = import.meta.env.VITE_BASE_ASSETS + 'art/3D/';

    return (
        <>
        <div id="threed">

            <div className="model container">
                <div className="thumbnail">
                    <div className="sketchfab-embed-wrapper"> <iframe title="Kendama" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/3670748a8f5f4bdb9bb4778e964c8647/embed"> </iframe> <p> <a href="https://sketchfab.com/3d-models/kendama-3670748a8f5f4bdb9bb4778e964c8647?utm_medium=embed&utm_campaign=share-popup&utm_content=3670748a8f5f4bdb9bb4778e964c8647" target="_blank" rel="nofollow" > Kendama </a> by <a href="https://sketchfab.com/Alexander-Williams?utm_medium=embed&utm_campaign=share-popup&utm_content=3670748a8f5f4bdb9bb4778e964c8647" target="_blank" rel="nofollow"> Alexander-W </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3670748a8f5f4bdb9bb4778e964c8647" target="_blank" rel="nofollow">Sketchfab</a></p></div>
                </div>
                <div className="info">
                    <p className="title"><h2>Kendama</h2></p>
                    <p className="description">
                        A traditional Japanese skill toy.
                    </p>
                </div>
            </div>

            <div className="model container">
                <div className="thumbnail">
                <img src={assetURL + "VRChatavatar.png"}></img>
                </div>
                <div className="info">
                    <p className="title"><h2>VRChat Avatar</h2></p>
                    <p className="description">
                        A human avatar mesh with bone rigging for use in VRChat.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ThreeD;