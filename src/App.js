import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPageBR from './component/LandingPageBR';
import LandingPage from './component/LandingPage';
import report from './component/report';
import report_pt from './component/report_pt'
function App() {
  return (
    <Router>
      
      <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/report" component={report}/>
        <Route path="/report/br" component={report_pt}/>
        <Route path="/br" component={LandingPageBR} />
      </Switch>
      </div>

    </Router>
  );
}

export default App;
