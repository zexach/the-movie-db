import React from 'react';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar/Sidebar';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import TVShowsPage from './pages/TVShowsPage/TVShowsPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import TVShowDetailsPage from './pages/TVShowDetailsPage/TVShowDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const App: React.FC = () => {

    return (
    <div className="app">
        <Sidebar />
        <div className="app__pages">
            <Routes>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/' element={<TVShowsPage />} />
                <Route path='/movies' element={<MoviesPage />} />
                <Route path='/movie/:id' element={<MovieDetailsPage />} />
                <Route path='/show/:id' element={<TVShowDetailsPage />} />
            </Routes>
        </div>
    </div>
    );
}

export default App;
