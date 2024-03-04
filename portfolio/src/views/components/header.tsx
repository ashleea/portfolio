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
            <li><div className="cloud"></div><NavLink className="link" to="/art/foodtruckcrew">art</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
  