import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LayoutContainer from '../components/LayoutContainer';
import About from '../components/About';
import Contact from '../components/Contact';
import RestaurantMenu from '../components/RestaurantMenu';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LayoutContainer />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />,
            },
        ],
    },
]);

export default appRouter;