import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPageBR from './component/LandingPageBR';
import LandingPage from './component/LandingPage';
import report from './component/report';
import report_pt from './component/report_pt'
function App() {
  return (
    <HashRouter >
      
      <div className="App">
      <Routes>
        <Route exact path="/" element={LandingPage} />
        <Route exact path="/report" element={report}/>
        <Route path="/report/br" element={report_pt}/>
        <Route path="/br" element={LandingPageBR} />
      </Routes>
      </div>

    </HashRouter>
  );
}

export default App;
