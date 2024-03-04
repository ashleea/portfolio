
const ThreeD = () => {

    const assetURL = '/assets/art/3D/';

    return (
        <>
        <div id="threed">

            <div className="model container">
                <div className="thumbnail">
                <img src={assetURL + "VRChatavatar.png"}></img>
                </div>
                <div className="info">
                    <p className="title"><h2>VR Avatar</h2></p>
                    <p className="description">
                        A human avatar mesh with bone rigging for use in VR applications. (2017)
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ThreeD;