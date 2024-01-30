import { Routes, Route} from 'react-router-dom';

import Home from '@/views/home/home';
import PageNotFound from '@/views/home/pagenotfound';

const routes = [
    { path: '/', component: <Home />}
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