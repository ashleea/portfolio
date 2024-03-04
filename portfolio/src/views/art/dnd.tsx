import ArtSidebar from "../components/artsidebar";

const Dnd = () => {

    const assetURL = '/assets/art/digital/dnd/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">
                <h1>Bug (Insekt Phreshk-Holphen) (2023)</h1>
                <p>My longest played and most designed character, who has developed into being a general original character. Some characters from her background story are included. Characters related to Bug's background story within the campaign are included.</p><br></br>
                <img src={assetURL + "bugbody.png"}></img>
                <img src={assetURL + "bugbust.png"}></img>
                <img src={assetURL + "bugbear.png"}></img>
                <img src={assetURL + "bugparty.png"}></img>
                <img src={assetURL + "swordsmans.jpg"}></img>

                <h1>Dandy Perchleaf and Kallavan (2022)</h1>
                <p>A duo, played only for a few months.</p><br></br>
                <img src={assetURL + "dandy.png"}></img>
                <img src={assetURL + "kallavan.png"}></img>

                <h1>Wamtali (2021)</h1>
                <p>My first character, and some of my first ever digital illustrations.</p><br></br>
                <img src={assetURL + "dnd-wamtali-comic.JPG"}></img>
                <img src={assetURL + "dnd-wamtali-comic2.JPG"}></img>
                <img src={assetURL + "dnd-wamtali.png"}></img>

            </div>
            
        </div>
        </>
    );
}

export default Dnd;