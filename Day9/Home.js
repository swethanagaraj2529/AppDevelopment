import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from './home_logo.png';
import './home.css';
import image from './Home.jpg';
import danc1 from './fam.jpeg';
import dance2 from './best.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from './Component/Redux/UserSlice';

function Counter({ countTo, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(1, progress / duration);
      setCount(Math.floor(countTo * percentage));
      if (percentage < 1) requestAnimationFrame(step);
    };
    
    requestAnimationFrame(step);
  }, [countTo, duration]);

  return <div className="counter">{count}</div>;
}
function Lounter({ countTo, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(1, progress / duration);
      setCount(Math.floor(countTo * percentage));
      if (percentage < 1) requestAnimationFrame(step);
    };
    
    requestAnimationFrame(step);
  }, [countTo, duration]);

  return <div className="lounter">{count}</div>;
}
function Pounter({ countTo, duration }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(1, progress / duration);
      setCount(Math.floor(countTo * percentage));
      if (percentage < 1) requestAnimationFrame(step);
    };
    
    requestAnimationFrame(step);
  }, [countTo, duration]);

  return <div className="pounter">{count}</div>;
}

function Home() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  // Reference to the scroll-text div
  const scrollTextRef = useRef(null);

  // Function to continuously scroll the text
  function scrollTextContent() {
    if (scrollTextRef.current) {
      if (scrollTextRef.current.scrollTop >= scrollTextRef.current.scrollHeight - scrollTextRef.current.clientHeight) {
        scrollTextRef.current.scrollTop = 0;
      } else {
        scrollTextRef.current.scrollTop++;
      }
    }
  }

  // Start scrolling when the component mounts
  useEffect(() => {
    const scrollInterval = setInterval(scrollTextContent, 50); // Adjust the interval as needed

    // Stop scrolling when the component unmounts
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="homehome">
      <div className="sidebarl">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
        <nav className="sidebarl-menu">
          <ul>
            <li>
              <Link to="/dashboard" style={linkStyle}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/claimadmin" style={linkStyle}>
                Claims
              </Link>
            </li>
            <li>
               <Link to="/policy" style={linkStyle}>
                FeedBack
              </Link> 
            </li>
          </ul>
        </nav>
      </div>
      <main>
        {/* <Counter countTo={150} duration={8000} />
        <Counter countTo={85} duration={20000} /> */}
        <Counter countTo={2200} duration={2000} />
      </main>
      <div className='pounter'>
        {/* <h1 className='pp'>"Lives Covered since inception"</h1> */}
         <Counter countTo={150} duration={8000} />
        
        {/* <Counter countTo={2200} duration={2000} /> */}
      </div>
      <div className='lounter'>
      <Counter countTo={85}  duration={20000} /> 
      </div>
      <FooterHome />
      <div className='namee'>
        <div id="scroll-container" ref={scrollTextRef}>
          <div id="scroll-text">An Integrated Grievance Management System to facilitate the policyholders and complainants.</div>
        </div>
      </div>
      <div className='frame'></div>
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function FooterHome() {
  return (
    <footer className="footer-home">
      <div className="footer-home-links">
        <Link to="/privacy" style={linkStyle}>
          Privacy Policy
        </Link>
        <Link to="/conditions" style={linkStyle}>
          Terms and Condition
        </Link>
        <Link to="/loginadmin" style={linkStyle}>
          Log out
        </Link>
      </div>
    </footer>
  );
}

export default Home;
