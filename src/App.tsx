import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Loader from 'components/common/loader/loader';
const LandingPage = React.lazy(() => import("views/landing-page/landing-page"));
const WeatherDetails = React.lazy(() => import("views/weather-details/weather-details"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/:city" element={<WeatherDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;