import ArtSidebar from "../components/artsidebar";

const Misc = () => {

    const assetURL = '/assets/art/digital/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">
                <h1>Miscellaneous Character Designs</h1>
                <p>Self-portraits and one-off characters. Mostly doodles.</p>

                <h2>3D Model References</h2>
                <div>
                    <img src={assetURL + 'humangirl-ref.jpg'}></img>
                </div>

                <h2>Other</h2>
                <div>
                    <img src={assetURL + 'street.png'}></img>
                    <img src={assetURL + 'soccer.png'}></img>
                    <img src={assetURL + 'sit.png'}></img>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Misc;