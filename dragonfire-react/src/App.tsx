import './App.css';
import Menubar from './components/Menubar';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ACHIEVEMENTSROUTE, CHECKLISTSROUTE } from './routes/AppRoutes';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

function App() {
  const routePages = [
    ACHIEVEMENTSROUTE,
    CHECKLISTSROUTE,
    'Søknader'
  ];

  const profileMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];

  return (
    <div className="App">
      <Menubar routes={routePages} profileMenuItems={profileMenuItems} />
      <Suspense>
          <Routes>
            <Route path="/*" element={<AppRoutes />} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
