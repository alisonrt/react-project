
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather />
          <footer>
          This project was coded by Alison and is{" "}
            <a href="https://github.com/alisonrt/react-project" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
          </footer>
      </div>
    </div>
  );
}


