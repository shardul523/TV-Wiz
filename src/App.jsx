import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/starred" element={<Starred />} />
                    </Route>
                    <Route path="/show/:showId" element={<Show />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
