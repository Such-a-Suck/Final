import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CookieApp from '../CookieApp/CookieApp';
import Rate from '../Rate/Rate';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Error404 from '../Error404/Error404';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <main>
                  <Router>
                    <Routes>
                      <Route path="/" element={<Rate />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<Error404 />} />
                    </Routes>
                  </Router>
                  <CookieApp />
                </main>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
