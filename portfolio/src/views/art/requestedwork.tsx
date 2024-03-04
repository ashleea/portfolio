import ArtSidebar from "../components/artsidebar";

const RequestedWork = () => {

    const assetURL = '/assets/art/digital/csusb/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">
                <h1>Robot</h1>
                <p>Served as a graphic for a robotics team within CSUSB.</p>
                <br></br>
                <div>
                    <img src={assetURL + 'robot.jpg'}></img>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default RequestedWork;