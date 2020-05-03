import React from "react";

import avatarDefault from '../../static/image/avatar-default.png'


export default (props) => {
  return(
    <div className={`avatar ${props.small ? 'avatar-small' : ''}`}>
      <img src={props.imgUrl ? props.imgUrl : avatarDefault} alt=""/>
    </div>
  )
}
