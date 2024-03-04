import ArtSidebar from "../components/artsidebar";

const FoodTruckCrew = () => {

    const assetURL = '/assets/art/digital/foodtruck/';

    return (
        <>
        <div className="characterconcepts">

            <ArtSidebar />

            <div className="mainbar container">
                <h1>Food Truck Crew</h1>
                <p>Towards the end of 2023, I was inspired to create an artistic project that would help me work on character concept work and animation. SInce I also had yet to work in non-humanistic forms, Miles and the Food Truck Crew were born.<br></br><br></br>
                A few other characters are in the works, shown in relation to Miles: 
                    <ul>
                        <li>Older Woman Chihuahua, owner of the food truck</li>
                        <li>Teenage Boyish Panther, coworker</li>
                        <li>Late Twenties Tiger, roommate</li>
                    </ul>
                Future plans related to this project include:
                    <ul>
                        <li>Digital designs of other Food Truck characters</li>
                        <li>3D models and rigs of all characters</li>
                        <li>Digital and/or 3D animation of how Miles came across the food truck</li>
                    </ul>
                </p>


                <h2>Miles</h2>
                <p>The first character I designed. Milo is a late twenties adult who recently found himself struggling to find work, before coming across a food truck looking to hire a cook.
                </p>
                <br></br>
                <div>
                    <img src={assetURL + 'lion-ref.jpg'}></img>
                    <img src={assetURL + 'lion-poses.jpg'}></img>
                    <img src={assetURL + 'lion-posing.jpg'}></img>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default FoodTruckCrew;