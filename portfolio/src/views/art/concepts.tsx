import { NavLink } from "react-router-dom";

const Concepts = () => {

    return (
        <>
        <div className="characterconcepts">

            <div className="sidebar container">
                <p className="header">Character Concepts</p>
                <ul>
                    <li><NavLink to="/art/foodtruckcrew">Food Truck Crew</NavLink></li>
                    <li><NavLink to="/art/dnd">Dungeons and Dragons</NavLink></li>
                </ul>
            </div>

            <div className="mainbar container">

            </div>
            
        </div>
        </>
    );
}

export default Concepts;