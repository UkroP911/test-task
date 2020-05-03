import React from "react";

import Avatar from './../Avatar';

export default (props) => {
  const {
    avatar,
    email,
    first_name,
    last_name
  } = props.listItem;
  return(
    <li className="profile-list__item">
      <div className="profile-list__avatar">
        <Avatar imgUrl={avatar} />
      </div>
      <div className="profile-list__user-info">
        <div className="profile-list__username">
          {first_name + ' ' + last_name}
        </div>
        <div className="profile-list__email">
          <small>User email address</small>
          <a className="text-truncate" href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
    </li>
  )
}
