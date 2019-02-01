import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList.js';

class App extends Component {

  state = {
    guest: [
      {
        name: 'Tresure',
        isConfirmed: false,
        isEditing: false
      }, {
        name: 'oledu',
        isConfirmed: true,
        isEditing: false
      }, {
        name: 'yupi',
        isConfirmed: false,
        isEditing: false
      }
    ] 
  }

  toggleGuestPropertyAt = (property,indexToChange) => 
    this.setState({
      guest: this.state.guest.map((guest,index)=>{
        if(index === indexToChange){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })

    toggleConfirmationAt = index => this.toggleGuestPropertyAt('isConfirmed', index)
    toggleCEditingAt = index => this.toggleGuestPropertyAt('isEditing', index)

  getTitalInvited = () => this.state.guest.length;
  // getConfirmedGuess = () => {}
  // getUnconfirmedGuess = () => {}
  

  render() {
    return (
      <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" />> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        <GuestList 
          guest={this.state.guest} 
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleCEditingAt}  
          />
      </div>
    </div>
    );
  }
}

export default App;
