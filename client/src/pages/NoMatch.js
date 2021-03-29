import React from "react";
import Jumbotron from "../components/Jumbotron";
import logo from '../images/sad-Critter.png';


const NoMatch = () => {

    setTimeout(() => {
        window.location.assign('/');
    }, 3000);
    
  return (
    <div>
      <Jumbotron> 
        <h1>
          <img src={logo} height="25%" width="25%" alt="logo"/>
        </h1>
        <h1>404 Page Not Found, redirecting to home...</h1>
       
      </Jumbotron>
    </div>
  );
};

export default NoMatch;