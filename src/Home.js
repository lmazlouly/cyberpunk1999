import './styles/App.scss';
import Header from './components/Header';
import Background from './components/Background';
import Characters from './components/Characters';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import David from './pages/David';
function Home() {
  return (
    <section>
      <Background name='background lucy'/>
      <Header/>
      <Router>
        <Characters/>
        <Switch>
          <Route path="/" exact element={<Home />}/>
          <Route path="/david"  element={<David />}/>
        </Switch>
        {/* <MenuItems></MenuItems> */}
      </Router>
    </section>
  );
}


export default Home;