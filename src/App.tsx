import { Outlet, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import CompanyPage from './views/CompanyPage';
import Home from './views/Home';
import OfferDetails from './views/OfferDetails';
import OffersPage from './views/OffersPage';
import AddOffer from './views/addOffer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            style: {
              marginTop: '60px',
              background: 'ffffff',
              color: '#000',
              height: '60px',
              width: '400px',
            },
          },
        }}
      />
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
          <Route path="/company/:name" element={<CompanyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
