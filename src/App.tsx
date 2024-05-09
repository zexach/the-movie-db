import React from 'react';
import './style/App.scss';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar/Sidebar';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import TVShowsPage from './pages/TVShowsPage/TVShowsPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import TVShowDetailsPage from './pages/TVShowDetailsPage/TVShowDetailsPage';

const App: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/shows')
    }, [])

    return (
    <div className="app">
        <Sidebar />
        <div className="app__pages">
            <Routes>
                <Route path='/' element={<MoviesPage />} />
                <Route path='/shows' element={<TVShowsPage />} />
                <Route path='/movie/:id' element={<MovieDetailsPage />} />
                <Route path='/show/:id' element={<TVShowDetailsPage />} />
            </Routes>
        </div>
    </div>
    );
}

export default App;
