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
      gameState: {
        ir: 1,
        tbc: 10
      },
      gameStarted: false,
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  set_ir = (e) => {
    const min = 1;
    const max = 10;
    const rand = min + Math.random() * (max - min);
    this.setState({
      ir: rand
    })
  }

  set_tbc = (e) => {
    const min = 10;
    const max = 20;
    const rand = min + Math.random() * (max - min);
    this.setState({
      tbc: rand
    })
    console.log(this.state.tbc)
  }

  startGame = (e) => {
    this.setState({
      gameStarted: true,
    })
  }

  endGame = (e) => {
    this.setState({
      gameStarted: false,
    })
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
        <Button onClick = {(e) => this.endGame(e)} className="center-block" variant="contained" color="primary">End Game</Button>
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

        <div>
        <Button onClick = {(e) => this.set_ir(e)} className="center-block" variant="contained" color="primary">Set Interest Rate</Button>
        </div>

        <div>
        <Button onClick = {(e) => this.set_tbc(e)} className="center-block" variant="contained" color="primary">Set tbc Rate</Button>
        </div>

        </div>}
        </div>
      );
    }
  }

  export default HomePage
