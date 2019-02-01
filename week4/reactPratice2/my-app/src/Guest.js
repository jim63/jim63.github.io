import React from 'react';
import propTypes from 'prop-types'
import GuestName from './GuestName.js'

const Guest = props => 
  <li>
    <GuestName isEditing={props.isEditing}>{props.name}</GuestName>
    <label>
      <input type="checkbox" 
            checked={props.isConfirmed} 
            onChange={props.handleConfirmation} /> Confirmed
    </label>
    <button onClick={props.handleEditing}>edit</button>
    <button>remove</button>
  </li>

Guest.propTypes = {
  name: propTypes.string.isRequired,
  isConfirmed: propTypes.bool.isRequired,
  isEditing: propTypes.bool.isRequired,
  handleConfirmation: propTypes.func.isRequired,
  handleEditing: propTypes.func.isRequired
}

export default Guest;