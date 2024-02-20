import { Routes, Route} from 'react-router-dom';

import Home from '@/views/home/home';
import PageNotFound from '@/views/home/pagenotfound';
import Concepts from '@/views/art/concepts';
import Webdev from '@/views/webdev/webdev';
import Projects from '@/views/projects/projects';
import ThreeD from '@/views/3D/3d';
import AlienEscape from '@/views/art/alienescapegame';
import Dnd from '@/views/art/dnd';
import FoodTruckCrew from '@/views/art/foodtruckcrew';
import MovingOut from './views/art/movingout';

const routes = [
    { path: '/', component: <Home />},

    { path: '/art/concepts', component: <Concepts />},
    { path: '/art/alienescape', component: <AlienEscape />},
    { path: '/art/movingout', component: <MovingOut />},
    { path: '/art/dnd', component: <Dnd />},
    { path: '/art/foodtruckcrew', component: <FoodTruckCrew />},

    { path: '/webdev', component: <Webdev />},

    { path: '/projects', component: <Projects />},

    { path: '/3D', component: <ThreeD />}
];

const routeComponents = routes.map(({path, component}, key) => 
  <Route path={path} element={component} key={key} />);

  const Router = () => {
    return (
      <>
          <Routes>
              {routeComponents}
  
              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </>
    )
  }
  export default Router;