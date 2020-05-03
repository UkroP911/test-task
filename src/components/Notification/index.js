import React from "react";

export default (props) => {
  return(
    <div className="notification row align-center">
      <div className="notification__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" fill="none">
          <g stroke="#000">
            <path d="M.5 16.5h17v1H.5zM8.5.5h1v2h-1z"/>
            <path clipRule="evenodd" d="M2.14 17S1 3 9 3s6.86 14 6.86 14H2.14zM5.92 17s.41 4 3.08 4 3.08-4 3.08-4H5.92z" strokeWidth="2"/>
          </g>
        </svg>
      </div>
      <div>
        {props.count || '0'}
      </div>
    </div>
  )
}
