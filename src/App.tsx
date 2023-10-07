import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import GenerateFilesButton from './components/GenerateFilesButton';
import Navigation from './components/navigation/Navigation';
import Dashboard from './views/Dashboard';
import OffersPage from './views/OffersPage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/offers" element={<OffersPage />} />
        </Route>
      </Routes>
      <GenerateFilesButton />
    </>
  );
}

export default App;
