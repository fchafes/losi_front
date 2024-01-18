import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="header">
        <video autoPlay muted loop id="header-video">
          <source src="/1.mp4" type="video/mp4" />
        </video>
      </div>
      <div id="site-control" className="text inline">
        <div className="links">
          <a className="home" title="Home" href="/">
          <span>Home</span>
          </a>
          <a className="menu" href="#page-menu" data-modal-toggle="#page-menu">
            <span>Menu</span>
          </a>
          <a id="losi" href="/">
            <h1>LOSI</h1>
          </a>
          <a className="cart" href="/cart">
            <span>Cart</span>
          </a>
          <a
            className="search"
            title="Search"
            href="/search"
            data-modal-toggle="#search-modal"
          >
           <span>Search</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
