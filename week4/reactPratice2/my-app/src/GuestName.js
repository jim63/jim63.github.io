import React from 'react';
import propTypes from 'prop-types'

const GuestName = props => {
  if (props.isEditing) {
    return(
      <input type="text" value={props.children}/>
    )
  }
  return(
    <span>
      {props.children}
    </span>
  )
}
  

GuestName.propTypes = {
  isEditing: propTypes.bool.isRequired,
}

export default GuestName;