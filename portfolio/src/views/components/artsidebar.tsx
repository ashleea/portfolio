import { NavLink } from 'react-router-dom'

export const ArtSidebar = () => {

    return (
        <div className="sidebar container">
            <p className="header">Character Concepts</p>
            <ul>
                <li><NavLink to="/art/foodtruckcrew">Food Truck Crew</NavLink></li>
                <li><NavLink to="/art/dnd">Dungeons and Dragons</NavLink></li>
            </ul>
            <p className="header">Pixel Sprites</p>
            <ul>
                <li><NavLink to="/art/alienescape">Alien Escape Game</NavLink></li>
                <li><NavLink to="/art/movingout">Moving Out Game</NavLink></li>
            </ul>
        </div>
    );
  }
  
  export default ArtSidebar;
  