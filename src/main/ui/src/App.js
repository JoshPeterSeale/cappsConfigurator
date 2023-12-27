import logo from './cappslogo.jpg';
import NonInterchangeableConfiguratorForm from './components/configurator-form/NonInterchangeableConfiguratorForm';

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
        <NonInterchangeableConfiguratorForm />
      </div>
    </div>
  );
}

export default App;
