import React, { Component } from "react";

import ProfileListItem from './../../components/ProfileListItem';
import Preloader from './../../components/Preloader'

class ProfileList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    }
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users?per_page=15&page=1')
      .then(res => res.json())
      .then(res => {
        const sortedData = res.data.sort(function (a, b) {
          if (a.first_name < b.first_name) {
            return 1;
          }
          if (a.first_name > b.first_name) {
            return -1;
          }
          return 0;
        });
        this.setState({
          users: sortedData
        });
      })
  }
  render(){
    const {
      users
    } = this.state;
    return(
      <div className="profile-list page-column">
        <h2 className="profile-list__title font-weight-5">Profile list</h2>
        <p>
          Laudem et via procedat oratio quaerimus igitur, quid et accurate disserendum et dolorem?. At magnum periculum
          adiit in oculis quidem exercitus quid ex ea voluptate et.
        </p>
        
          {
            users
              ? <ul>
                  {users.map((item, id) => <ProfileListItem listItem={item} key={id}/>)}
                </ul>
              : <Preloader />
          }
          
        
        
      </div>
    )
  }
}

export default ProfileList;
