import './App.scss'
import { HashRouter, Switch, Route } from 'react-router-dom'
import LandingPageBR from './component/LandingPageBR';
import LandingPage from './component/LandingPage';
import report from './component/report';
import report_pt from './component/report_pt'
function App() {
  return (
    <HashRouter >
      
      <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/report" component={report}/>
        <Route path="/report/br" component={report_pt}/>
        <Route path="/br" component={LandingPageBR} />
      </Switch>
      </div>

    </HashRouter>
  );
}

export default App;
