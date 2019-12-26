import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import RouterView from './components/Router/RouterView';
import Footer from 'components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="router-footer-container">
        <RouterView />
        <Footer />
      </div>
    </div>
  );
}

export default App;
