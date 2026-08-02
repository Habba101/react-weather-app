import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
    <Weather defaultCity="Pretoria" />

    <footer>
      This project was coded by Rahaba Motaung  and is {""}
      <a href="https://github.com/Habba101/react-weather-app" target="_blank" rel="noopener noreferrer">
       open-sourced on GitHub
      </a> and is <a href="https://habbas-react-weather-app.netlify.app/">hosted on Netlify</a>
    </footer>
    </div> 
  </div>
  );
}


