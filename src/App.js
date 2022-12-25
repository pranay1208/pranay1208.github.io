import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Pranay Agarwal - Portfolio</p>
        <a
          className='App-link'
          href='https://pranay.webflow.io'
          target='_blank'
          rel='noopener noreferrer'
        >
          Current Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
