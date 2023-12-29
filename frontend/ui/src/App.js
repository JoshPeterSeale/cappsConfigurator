import logo from './cappslogo.jpg';
import NonInterchangeableConfiguratorForm from './components/configurator-form/NonInterchangeableConfiguratorForm';
import './App.css';

function App() {
  return (
    <div className="App" id="header">
      <h1 className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='sub-header'>
          <h2>
            Welcome to the CAPPS bolt configurator app. Fill out the form to generate the product code.
          </h2>
        </div>
      </h1>
      <div className="configurator-container">
        <NonInterchangeableConfiguratorForm />
      </div>
    </div>
  );
}

export default App;
