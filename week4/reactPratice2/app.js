function Header(props){
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Player: {props.totalPlayer}</span>
    </header>
  );
}

// const  Counter = (props) => {
//   return(
//     <div className='counter'>
//       <button className='counter-action decrement'>-</button>
//       <span className=' counter-score'>{props.score}</span>
//       <button className='counter-action increment'>+</button>
//     </div>
//   )
// }

class Counter extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     score: 0
  //   };
  // }
  state = {
    score: 0
  }

  incrementScore(){
    this.setState({
      score: this.state.score+1
    })
  }

  decrementScore=()=>{
    this.setState( prevState=> {
      return {
        score: prevState.score - 1
      }
    })
  }

  render(){
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={this.decrementScore}>-</button>
        <span className=' counter-score'>{this.state.score}</span>
        <button className='counter-action increment' onClick={this.incrementScore.bind(this)}>+</button>
      </div>
      );
    }
  }

const Player = (props) => {
  return(
    <div className='player'>
      <span className='player-name'>{props.name}</span>
      <button className="remove-player" onClick={()=>props.removePlayer(props.id)}>✖</button>
      <Counter/>
    </div>
  )
}

  class App extends React.Component{
    state = {
      players: [{
        name: "Guil",
        id: 1
      }, {
        name: "Treasure",
        id: 2
      }, {
        name: "Ashley",
        id: 3
      }, {
        name: "James",
        id: 4
      }]
    }
    
    handleRemovePlayer = (id) => {
      this.setState( prevState=> {
        return {
          players: prevState.players.filter(p => p.id!==id)
        };
      });
    }

    render(){
      return(
        <div className='scoreBoard'>
          <Header title="Scoreboard" totalPlayer={this.state.players.length}/>
          {this.state.players.map(player=><Player id={player.id} name={player.name} key={player.id.toString()} removePlayer={this.handleRemovePlayer}></Player>)}
        </div>
  );
}
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);