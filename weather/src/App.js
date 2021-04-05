import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="page-header">
      <div className="container">
        <nav className="page-nav clearfix">
          <a href="#" className="main-title">La meteo</a>
          <ul className="site-navigation clearfix">
            <li><a href="#">Weather</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="backgroung-image">
    <section className="container">
    <nav className="page-nav2 clearfix">
    {/* <input type="submit" value="find"></input> */}
          <ul className="site-navigation2">
            <li><a href="#">Today</a></li>
            <li><a href="#">Tomorrow</a></li>
            <li><a href="#">Week</a></li>
          </ul>
        </nav>
    </section>
    <section className="today-tomorrow">
      <div>
        <p className="title">The weather for today</p>
        <p className="day">Friday, April 9</p>
        <p className="temperature">+8</p>
        <p>Feels like +6 </p>
        <p>Cloudy</p>
        <ul className="details"> 
        <li>Wind</li>
        <li>Pressure</li>
        <li>Humidity</li>
        </ul>
      </div>
    </section>
    <section className="today-tomorrow">
      <div>
        <p className="title">The weather for tomorrow</p>
        <p className="day">Suturday, April 10</p>
        <p className="temperature">+10</p>
        <p>Feels like +12 </p>
        <p>Sunny</p>
        <ul className="details"> 
        <li>Wind</li>
        <li>Pressure</li>
        <li>Humidity</li>
        </ul>
      </div>
    </section>
    <section className="week">
      <div>
        <p className="title-week">The weather for a week</p>
          <ul className="weather-for-week">
            <li>Friday, April 9</li>
            <li>Saturday, April 10</li>
            <li>Sunday, April 11</li>
            <li>Monday, April 12</li>
            <li>Tuesday, April 13</li>
            <li>Wednesday, April 14</li>
            <li>Thursday, April 15</li>
          </ul>
          </div>
    </section>
    </div>
    <footer className="page-footer ">
      <div className="container">
        <p className="text">
          All rights reserved &#169; Dokan | Designed
          <a href="#" className="colortext">ThemenGraph</a>
        </p>
      </div>
    </footer>
    </div>
  );
}

export default App;



  {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}