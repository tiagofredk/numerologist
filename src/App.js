import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPageBR from './component/LandingPageBR';
import LandingPage from './component/LandingPage';
import Report from './component/Report';
import ReportBr from './component/ReportBr'
import Page404 from './component/Page404';
function App() {
  return (
    <HashRouter >

      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/report" element={<Report/>} />
          <Route path="/report/br" element={<ReportBr/>} />
          <Route path="/br" element={<LandingPageBR/>} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
        
      </div>

    </HashRouter>
  );
}

export default App;
