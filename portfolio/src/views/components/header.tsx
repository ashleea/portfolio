import { NavLink } from 'react-router-dom'

export const Header= () => {

  return (
    <div>
      <div>
        <div id="header">
          <p>ashleea holloway</p>
        </div>
        <ul id="header-nav">
            <li><div className="cloud"></div><NavLink className="link" to="/">home</NavLink></li>
            <li><div className="cloud"></div><NavLink className="link" to="/projects">projects</NavLink></li>
            <li><div className="cloud"></div><NavLink className="link" to="/webdev">webdev</NavLink></li>
            <li><div className="cloud"></div><NavLink className="link" to="/art/concepts">art</NavLink></li>
            <li><div className="cloud"></div><NavLink className="link" to="/3D">3D</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
  