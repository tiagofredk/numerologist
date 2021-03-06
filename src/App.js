import React, {Fragment, Suspense, lazy } from 'react';
import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Report from './component/Report';
import Page404 from './component/Page404';

const LandingPage = lazy(() => import("./component/LandingPage"));

function App() {

  return (
    <HashRouter >

      <div className="App">
        <Suspense fallback={<Fragment />} >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/report" element={<Report />} />
            <Route path="/report/br" element={<Report />} />
            <Route path="/br" element={<LandingPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>

      </div>

    </HashRouter>
  );
}

export default App;
