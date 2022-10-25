import './styles/App.scss';
import './styles/Library.scss';
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import David from './pages/David';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/david"  element={<David />}/>
    </Routes>
  );
}

export default App;
