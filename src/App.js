import './App.scss'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage';
import Report from './component/Report';
import Page404 from './component/Page404';



function App() {
  
  return (
    <HashRouter >

      <div className="App">
        <Routes>
          <Route path="/"          element={<LandingPage/>} />
          <Route path="/report"    element={<Report/>} />
          <Route path="/report/br" element={<Report/>} />
          <Route path="/br"        element={<LandingPage/>} />
          <Route path="*"          element={<Page404/>}/>
        </Routes>
        
      </div>

    </HashRouter>
  );
}

export default App;
