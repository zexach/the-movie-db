import React from 'react';
import './style/App.scss';
import Sidebar from './components/layout/Sidebar/Sidebar';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import { Routes, Route } from 'react-router-dom';
import TVShowsPage from './pages/TVShowsPage/TVShowsPage';

const App: React.FC = () => {
    return (
    <div className="app">
        <Sidebar />
        <div className="app__pages">
            <Routes>
                <Route path='/' element={<MoviesPage />} />
                <Route path='/shows' element={<TVShowsPage />} />
            </Routes>
        </div>
    </div>
    );
}

export default App;
