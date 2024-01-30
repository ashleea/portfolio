import { NavLink } from 'react-router-dom'

export const Header= () => {

  return (
    <div>
      <div id="websiteheader">
        <div>
          <p>Navigation</p>
        </div>
        <ul>
            <li><NavLink to="/">home</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
  