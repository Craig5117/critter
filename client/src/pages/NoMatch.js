import React from "react";
import Jumbotron from "../components/Jumbotron";



const NoMatch = () => {

    setTimeout(() => {
        window.location.assign('/');
    }, 3000);
    
  return (
    <div>
      <Jumbotron> 
        <h1>

          <img src={process.env.PUBLIC_URL + '/images/sad-Critter.png'} height="25%" width="25%" alt="logo" />
        </h1>
        <h1>404 Page Not Found, redirecting to home...</h1>
       
      </Jumbotron>
    </div>
  );
};

export default NoMatch;