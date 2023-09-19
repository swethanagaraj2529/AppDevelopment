import React, { useState } from 'react';
import './home.css';

import { Link } from 'react-router-dom';

const Home = () =>{
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    
  };

    return(
<div>

      <div className='container'>
        <div className='page '>
      <title>GovExam</title>
          <div class="col">
        </div>
      </div>
      <section class="pinnadi">
      <nav>
      <nav> 
      <nav className="navbar">
      <div className="navbar-brand" ></div>
      <ul className="navbar-nav">

      <li>
          <button className='name'> </button>
        </li>
      <li className="dropdown">
          <button onClick={toggleDropdown}></button>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li><Link to="/tnpsc"><button></button></Link></li>
              <li><Link to ="/upsc"><button></button></Link></li>
              <li><Link to ="/tet"><button></button></Link></li>
            </ul>
          )}
        </li>
        <li>
        <Link to="/user"><button></button></Link>  
        </li>
        <li>
         <Link to="/login"> <button></button></Link>
        </li>
        <li>
         <Link to="/sign"> <button></button></Link>
        </li>
        
      </ul>
       
    </nav>
   
          <div class="nav-links">
            </div>
            </nav>
              </nav>
              
              <div className="container-info"> </div>
<div class="text-box">

        </div>
        
        </section>
      <section class="Events">

        <div class="row">
          <div class="Events-col">

          <h3>We Are
Student First</h3>
<p>Government jobs in India are one of the most sought-after professions. Many candidates consider passing a government exam as it provides numerous benefits during their tenure and after retirement as well.</p>
        
          </div>
          <div class="Events-col">
          <h3>Government Exams in India</h3>
          <p>Exams administered by the government of India are among the most anticipated. Each year, the government holds a plethora of exams to fill open positions with qualified individuals. Thousands of individuals start their preparation almost a year before the exam and desperately wait for updates on vacancies, dates, and notifications. Aspirants face huge competition when attempting government exams.  </p>
          </div>
          <div class="Events-col">
          <h3>We Dream Big</h3>
          <p>Our ambition is to transform education by improving outcomes.We are authentic and align our action to our words.We are curious learners and always seek better ways of doing things.We respectfully challenge each other and then unite before what we do</p>
          </div>
        </div>
        
      </section>
     
      <section class="Event">
        <h1>GovExam</h1>
        <p>We’re committed to helping students succeed</p>
        <div class="row">
          <div class="Event-col">
            <div class="layer">
            </div>
          
          </div>
          <div class="Event-col">
          
            <div class="layer">
            </div>
          </div>
          <div class="Event-col">
        
            <div class="layer">

            </div>
          </div>
        </div>
      </section>
     </div>
     
     </div> 
  
   )
 }

  export default Home;