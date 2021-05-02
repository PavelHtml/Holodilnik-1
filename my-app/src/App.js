import logo from './logo.svg';
import './App.css';
import eda from './eda.js';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="wrapper">
          <div className="logo">
            <a href="#"><img src={logo}/></a>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="#">Professional</a></li>
              <li><a href="#">Professional</a></li>
              <li><a href="#">Professional</a></li>
              <li><a href="#">Professional</a></li>
              <li><a href="#">Professional</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <button type="button" className="mainButton">Найти еду</button>
      <div className="eda">

      </div>
    </div>
  );
}

export default App;
