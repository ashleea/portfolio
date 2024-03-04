import ArtSidebar from "../components/artsidebar";

const Dnd = () => {

    const assetURL = import.meta.env.VITE_BASE_ASSETS + 'art/digital/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">

                <h2>Bug (Insekt Phreshk-Holphen) (2023)</h2>
                <p>My longest played and most designed character. Has developed into being a general original character.</p>

                <h2>Dandy Perchleaf and Kallavan (2022)</h2>
                <p>A duo, played only for a few months.</p>

                <h2>Wamtali (2021)</h2>
                <p>My first character, and some of my first ever digital illustrations.</p>
                <img src={assetURL + "dnd-wamtali-comic.jpg"}></img>
                <img src={assetURL + "dnd-wamtali-comic2.jpg"}></img>
                <img src={assetURL + "dnd-wamtali.png"}></img>

            </div>
            
        </div>
        </>
    );
}

export default Dnd;