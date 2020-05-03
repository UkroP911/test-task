import React, { Component } from "react";

import Nav from '../../components/NavList';
import Avatar from '../../components/Avatar';
import Notification from '../../components/Notification';
import {Burger} from "../../components/Icons";

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isMobileNavOpen: false,
      animationClass: 'close',
    }
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users/2')
      .then(res => res.json())
      .then(res => {
        this.setState({
          currentUser: {...res.data},
        });
      })
  }
  
  handleMobileNav = (e) => {
    const { isMobileNavOpen } = this.state;
    if(isMobileNavOpen){
      this.setState({
        animationClass: 'slideRight',
      });
      setTimeout(() => {
        this.setState({
          isMobileNavOpen: false,
        });
      }, 500)
    } else {
      this.setState({
        isMobileNavOpen: true,
        animationClass: 'slideLeft',
      });
    }
  };
  
  render(){
    const {
      currentUser,
      isMobileNavOpen,
      animationClass
    } = this.state;
    
    return(
      <header className="header">
        <div className="row">
          <div className="header__navbar page-column page-column-bg">
            <Nav />
          </div>
          
          <div className="header__userbar page-column row justify-right align-center">
            <div className="header__user row align-center ">
              <Avatar imgUrl={currentUser && currentUser.avatar} small />
              <div>{currentUser && currentUser.first_name + ' ' + currentUser.last_name}</div>
            </div>
            <div className="header_notification">
              <button className="btn">
                <Notification />
              </button>
            </div>
            <div className="header__menu">
              <button className="btn" onClick={this.handleMobileNav}>
                <Burger />
              </button>
            </div>
          </div>
        </div>
        {
          isMobileNavOpen && <Nav className={animationClass} />
        }
      </header>
    )
  }
}

export default Header;
