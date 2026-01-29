import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LayoutContainer from '../components/LayoutContainer';
import About from '../components/About';
import Contact from '../components/Contact';

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
        ],
    },
]);

export default appRouter;