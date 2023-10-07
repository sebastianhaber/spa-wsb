import { Outlet, Route, Routes } from 'react-router-dom';
import GenerateFilesButton from './components/GenerateFilesButton';
import Navigation from './components/navigation/Navigation';
import AddOffer from './views/AddOffer';
import Home from './views/Home';
import OfferDetails from './views/OfferDetails';
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
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/offers/:id" element={<OfferDetails />} />
          <Route path="/add-offer" element={<AddOffer />} />
        </Route>
      </Routes>
      <GenerateFilesButton />
    </>
  );
}

export default App;
