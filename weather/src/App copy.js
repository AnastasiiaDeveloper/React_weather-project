import "./App.css";
// import React, { lazy, Component } from "react";
// import { Route, Switch } from "react-router-dom";
// import { getWeather } from "./services/services";
// import Navigation from './navigation/Header-navigation';
// import Navigation2 from './navigation/Weather-navigation';

// const Weather = lazy(() =>
//   import(
//     "./pages/weather-page/weather-page.js" ) /* webpackChunkName: "weather-page" */
// );

// const News = lazy(() =>
//   import("./pages/news-page/news-page.js" ) /* webpackChunkName: "news-page" */
// );

// const Contact = lazy(() =>
//   import("./pages/contact-page/contact-page.js") /* webpackChunkName: "contact-page" */
// );

// const NotFoundPage = lazy(() =>
//   import(
//     "./pages/not-found-page/not-found-page.js") /* webpackChunkName: "not-found-page" */
// );
// const Today = lazy(() =>
//   import(
//     "./weather-pages/today-page.js" ) /* webpackChunkName: "today-page" */
// );
//const Tomorrow = lazy(() =>
//   import(
//     "./weather-pages/tomorrow-page.js" ) /* webpackChunkName: "tomorrow-page" */
// );
// const Week = lazy(() =>
//   import(
//     "./weather-pages/week-page.js" ) /* webpackChunkName: "week-page" */
// );

// class App extends Component {
//   state = {
//     weather: [],
//   };

//   async componentDidMount() {
//     const weatherReceipt = getWeather().then(data =>
//       this.setState({ weather: data })
//     );
//   }
//   render() {
//     return (
//       <div>
//         <Navigation/>
//           <Switch>
//             <Route path="/" exact component={Weather} />
//             <Route path="/news" component={News} />
//             <Route path="/contact" component={Contact} />
//             <Route component={NotFoundPage} />
//  <Route path="/today" component={Today} />
//  <Route path="/tomorrow" component={Tomorrow} />
//  <Route path="/week" component={Week} />

//           </Switch>
//      </div>
//     );
//   }
// }

const App = () => {
  return <div></div>;
  // return (
  //   <div className="App">
  //   <header className="page-header">
  //     <div className="container">
  //       <nav className="page-nav clearfix">
  //         <a href="#" className="main-title">La meteo</a>
  //         <ul className="site-navigation clearfix">
  //           <li><a href="#">Weather</a></li>
  //           <li><a href="#">News</a></li>
  //           <li><a href="#">Contact us</a></li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>
  //   <div class="backgroung-image">
  //   <section className="container">
  //   <nav className="page-nav2 clearfix">
  //   {/* <input type="submit" value="find"></input> */}
  //         <ul className="site-navigation2">
  //           <li><a href="#">Today</a></li>
  //           <li><a href="#">Tomorrow</a></li>
  //           <li><a href="#">Week</a></li>
  //         </ul>
  //       </nav>
  //   </section>
  //   <section className="today-tomorrow">
  //     <div>
  //       <p className="title">The weather for today</p>
  //       <p className="day">Friday, April 9</p>
  //       <p className="temperature">+8</p>
  //       <p>Feels like +6 </p>
  //       <p>Cloudy</p>
  //       <ul className="details">
  //       <li>Wind</li>
  //       <li>Pressure</li>
  //       <li>Humidity</li>
  //       </ul>
  //     </div>
  //   </section>
  //   <section className="today-tomorrow">
  //     <div>
  //       <p className="title">The weather for tomorrow</p>
  //       <p className="day">Saturday, April 10</p>
  //       <p className="temperature">+10</p>
  //       <p>Feels like +12 </p>
  //       <p>Sunny</p>
  //       <ul className="details">
  //       <li>Wind</li>
  //       <li>Pressure</li>
  //       <li>Humidity</li>
  //       </ul>
  //     </div>
  //   </section>
  //   <section className="week">
  //     <div>
  //       <p className="title-week">The weather for a week</p>
  //         <ul className="weather-for-week">
  //           <li>Friday, April 9</li>
  //           <li>Saturday, April 10</li>
  //           <li>Sunday, April 11</li>
  //           <li>Monday, April 12</li>
  //           <li>Tuesday, April 13</li>
  //           <li>Wednesday, April 14</li>
  //           <li>Thursday, April 15</li>
  //         </ul>
  //         </div>
  //   </section>
  //   </div>
  //   <footer className="page-footer ">
  //     <div className="container">
  //       <p className="text">
  //         All rights reserved &#169; Dokan | Designed
  //         <a href="#" className="colortext">ThemenGraph</a>
  //       </p>
  //     </div>
  //   </footer>
  //   </div>
  // );
};

export default App;
