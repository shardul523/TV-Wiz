import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

export default function MainLayout() {
    return (
        <>
            <h1>TV Wiz App</h1>
            <Navigation />
            <Outlet />
        </>
    );
}
