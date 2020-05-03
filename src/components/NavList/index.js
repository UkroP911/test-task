import React from "react";


const listItems = [
  'Browse',
  'How it works',
  'Help',
  'About',
];

export default (props) => {
  return(
    <nav className={`navbar ${props.className}`}>
      <ul className="list">
        {
          listItems.map(( item, id ) => (
            <li key={id}><a href="#">{item}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}
