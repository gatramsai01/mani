import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import UserPage from './components/UserPage';

import { BrowserRouter,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
      <Route  path='/' exact element={<HomePage/>} />
      <Route path='/user/:id' element={<UserPage/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
