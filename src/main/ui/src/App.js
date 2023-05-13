import logo from './cappslogo.jpg';
import './App.css';
import Form from'./Form.js';
import { Dropdown } from './Dropdown.js'
import { DropdownElement } from './DropdownElement.js'


function App() {
  return (
    <div className="App" id="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the CAPPS bolt configurator app!
        </p>
        <DropdownElement label="Length"/>
      </header>
    </div>
  );
}

export default App;
