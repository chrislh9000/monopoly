import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Main from './Main.jsx'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: true,
      name: "",
      gameState: {},
      gameStarted: false,
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  startGame = (e) => {
    this.setState({
      gameStarted: true,
    })

    console.log('Penis')
  }

  // addUser = (name) = {
  //   this.setaState({
  //     gameState: {
  //
  //     }
  //   })
  // }
  //

  render() {
    return (
      <div>
      {this.state.gameStarted ?
        <div>
        <Main />
        </div>
        :
        <div>
        <h1> Monopoly Game </h1>

        <div>
        <p>Enter your name below to get started </p>
        </div>

        <div className="form-group">
        <Input value={this.state.name} onChange={(e)=> this.handleName(e)} className="form-control" placeholder="Your name"></Input>
        </div>

        <Button className="center-block" variant="contained" color="primary">Add Player</Button>

        <div>
        <Button onClick = {(e) => this.startGame(e)} className="center-block" variant="contained" color="primary">Start Game</Button>
        </div>

        </div>}
        </div>
      );
    }
  }

  export default HomePage
