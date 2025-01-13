import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AuthGuard from './features/auth/authGuard';
import CharactersPage from './pages/Character';
import PlanetsPage from './pages/Planets';
import StarshipsPage from './pages/Starships';
import EntityDetails from './features/entities/entityDetails';
import Main from './components/Main';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route element={<AuthGuard />}>
          <Route path="/main" element={<Main />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="/:endpoint/:id" element={<EntityDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;