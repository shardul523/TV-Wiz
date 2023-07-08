import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';
import Title from './Title';

export default function MainLayout() {
    return (
        <>
            <Title />
            <Navigation />
            <Outlet />
        </>
    );
}
