import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import CharactersPage from '../pages/Character';
import PlanetsPage from '../pages/Planets';
import StarshipsPage from '../pages/Starships';

const Main = () => {
  return (
    <div className="container mt-5">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/characters">Characters</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/planets">Planets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/starships">Starships</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </div>
  );
};

export default Main;