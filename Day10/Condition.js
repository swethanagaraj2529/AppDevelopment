import React from 'react'
import { Link } from 'react-router-dom';
import './condition.css';
import LogoImage from './login_logo.png';
function Condition(){
  return (
     <div className='swe'>
     <div className='hai'>
      {/* <div className="logoo-container">
          <img src={LogoImage} alt="Logoo" className="logoo" />
        </div> */}
<h2 className='hello'>Terms and conditions</h2>
      <h3 className='one'>Declaration (Mandatory Declarations before submission of Proposer Data)</h3> 
      <p>None of the Insured members fall in the category of Politically Exposed Persons (P.E.P.)
          The following terms and conditions of use shall govern your use of the website www.skyinsurance.com 
        and all other URLs forming part thereof (hereinafter referred to as “the Sites”). The Sites are owned and managed by Care Health Insurance Company 
        Limited incorporated under the Indian Companies Act, 
        1956 (hereinafter referred to as “us or we “in the first person and or as “Care Health Insurance” wherever the context so requires).
         These terms and conditions of use form the entirety of any express or implied contract that may or may be deemed to exist between us and you.</p>

       <h3 className='two'>Cookies</h3> 
      <p>Care Health Insurance uses the technology known as "cookies" to track usage patterns, traffic trends, and user behavior, 
        as well as to record other information from the website. For certain services provided on this website, cookies
         allow Care Health Insurance and/or its group companies/affiliates to save information locally so that you will not have to re-enter 
         it the next time you visit. Many content adjustments and customer service improvements are made based on the data derived from cookies.
          The information we collect from cookies will not be used to create profiles of users and will only be used in aggregate form.
         The User may set his/her/its browser to refuse cookies. If the User so chooses, the User may still gain access to most
         of the Website, but the User may not be able to conduct certain types of transactions (such as shopping) or take advantage of some of the interactive elements offered.
      If the User uses any of the sharing features that may be offered by this Site, the User’s friend's email address will not be retained on Care Health Insurance Website or used in any way by Care Health Insurance or its group companies/affiliates.</p>

       <h3 className='three'>Modification of these terms of use</h3> 
      <p>Care Health Insurance reserves the right to change the terms, conditions, and notices under which the Sites are offered, including but not limited to the charges,
         if any, associated with the use of the Sites. It shall be the sole responsibility of the user to regularly review these terms and conditions.
         The user’s continued use of the Site shall constitute his/her/its acceptance of any such changes to this policy.
      Care Health Insurance reserves the right, in its sole discretion, to terminate your access to any or all Sites and the related services or any part or portion thereof, at any time, without notice.</p>

       {/* <h3 className='four'>Termination/ Access restriction</h3>  */}

      <h3 className='five'>Materials provided by you</h3>
      <p>Care Health Insurance does not claim ownership of the materials you provide to Care Health Insurance (including registration data, feedback, suggestions etc) or post, upload, input or submit to any of the Sites or its associated services (“Submissions”). However by posting, uploading, inputting, providing or submitting your Submissions, you are granting Care Health Insurance and its group companies/affiliates the use of your Submissions in connection with the operation of their businesses including publishing your name in connection with your Submissions. While Care Health Insurance agrees not to use or sell identifiable data contained in your Submissions, it shall have the exclusive right to use, transfer or otherwise deal with compiled data in any manner Care Health Insurance deems fit.</p>
   
       </div>
       <div className="footerey">
  <div className="footerey-links">
   <Link to ="/privacy"> <button className="footerey-button">Privacy Policy</button></Link>
    <Link to ="/conditions"><button className="footerey-button">Terms and Conditions</button></Link>
   <Link to ="/faq"> <button className="footerey-button">FAQ</button></Link>
  </div>
</div>
      </div>
  );


}
export default Condition;