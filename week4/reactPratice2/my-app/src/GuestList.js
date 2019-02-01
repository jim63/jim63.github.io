import React from 'react';
import propTypes from 'prop-types'
import Guest from './Guest.js'

const GuestList = props => 
  <ul>
  {props.guest.map((guest,index) =>
    <Guest 
      key={index} 
      name={guest.name} 
      isConfirmed={guest.isConfirmed} 
      isEditing={guest.isEditing}
      handleConfirmation={()=>props.toggleConfirmationAt(index)}
      handleEditing = {()=>props.toggleEditingAt(index)}
      />
  )}
  </ul>;


GuestList.propTypes = {
  guest: propTypes.array.isRequired,
  toggleConfirmationAt: propTypes.func.isRequired,
  toggleEditingAt: propTypes.func.isRequired
}

export default GuestList;