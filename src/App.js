import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Mynav from './component/Mynav';
import Myrouting from './component/Myrouting';

function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
        <Mynav />
        <Myrouting />
      </BrowserRouter>
    </div>
  );
}

export default App;
