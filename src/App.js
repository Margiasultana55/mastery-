
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './Components/Main/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Info from './Components/Info/Info';
import NotFound from './Components/NotFound/NotFound';





function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path='/home'>
            <Main></Main>
          </Route>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/course'>
            <Courses></Courses>
          </Route>
          <Route path='/info'>
            <Info></Info>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>





    </div>
  );
}

export default App;
