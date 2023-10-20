import { Outlet, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import CompanyPage from './views/CompanyPage';
import Home from './views/Home';
import OfferDetails from './views/OfferDetails';
import OffersPage from './views/OffersPage';
import AddOffer from './views/addOffer';

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
          <Route path="/company/:id" element={<CompanyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
