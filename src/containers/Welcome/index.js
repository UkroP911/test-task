import React, { Component } from "react";

import iconForm from './../../static/image/info-icon.png'
import welcomBG from '../../static/image/welcom-bg.png'

class Welcome extends Component{
  
  
  render(){
    return(
      <div className="welcome page-column page-column-bg">
        
        <h1 className="welcome__title  text-center">
          Welcome! Thanks
          <br/>
          for joining us.
        </h1>
        
        <div className="welcome__img">
          <div className="welcome__icon">
            <img src={iconForm} alt=""/>
          </div>
          
          <div className="welcome__bg">
            <img src={welcomBG} alt=""/>
          </div>
          
          <div className="welcome__btn row justify-center">
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-black">Set up your account</a>
          </div>
        </div>
        
        
        
        <div className="welcome__decr text-center">
          <h3 className="welcome__decr-title font-weight-7">Description</h3>
          <p>
            Hanc ego cum soluta nobis est laborum et accusamus et via procedat oratio. Sed ut ad modum, quaeso,
            interpretaris? sicine eos censes aut rerum hic tenetur.
          </p>
        </div>
        
      </div>
    )
  }
}

export default Welcome;
