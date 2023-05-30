import logo from './cappslogo.jpg';
import './App.css';
import Form from'./Form.js';
import { Dropdown } from './Dropdown.js'
import { DropdownElement } from './DropdownElement.js'
import { GetLengths, GetDiameters, GetPitch, GetNutType } from './GetValues.js'
import { DebugDropdownElement } from'./DebugDropdownElement.js'


function App() {
  return (
    <div className="App" id="header">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the CAPPS bolt configurator app!
        </p>
      </header>
      <div className="Configurator">
        <DropdownElement label="Length:" url="length"/>
        <DropdownElement label="Diameter:   " url="diameter" param="?length=55"/>
        <DropdownElement label="Pitch:   " url="pitch" param="?diameter=10"/>
        <DropdownElement label="Nut Type:   " url="nutType"/>
      </div>
    </div>
  );
}

export default App;
