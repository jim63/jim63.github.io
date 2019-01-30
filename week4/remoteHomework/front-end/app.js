const Nav = (props) => {
  return (
    <nav>
      <div className='container nav' >
        <h2>{props.logoTitle}</h2>
        <div className="ham">
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </div>
        <ul className="navItem">
        <li><a href="#">map</a></li>
        <li><a href="#">news</a></li>
        <li><a href="#">career</a></li>
        <li><a href="#">conatct</a></li>
      </ul>
      </div>
    </nav>
  )
}

const Main = (props) => {
  return(
    <div className="container">
      <h1 className="title">{props.mainTitle}</h1>
    </div>
  )
}

const Button = () => {
  return(
    <div className="button">Call2Action</div>
  )
}

class App extends React.Component{
  state = {
    article: [{
      title : "Content Box 1",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 1
    }, {
      title: "Content Box 2",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 2
    }, {
      title: "Content Box 3",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 3
    }, {
      title: "Content Box 4",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 4
    }, {
      title: "Content Box 5",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 5
    }, {
      title: "Content Box 6",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 6
    }, {
      title: "Content Box 7",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 7
    }, {
      title: "Content Box 8",
      content: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate`,
      id: 8
    }
    ]
  }
  render(){
    return(
      <div>
        <Nav logoTitle = 'JIM63'/>
        <Main mainTitle = "Hello yuping !"/>
        
        <Button/>
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
