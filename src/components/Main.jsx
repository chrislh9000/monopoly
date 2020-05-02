import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Bank from './Bank.jsx'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: {
        players:['Chris',  'Arjun', 'Noah'],
        turn: 1,
      },
      changeBank: false,
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  changeBank = (e) => {
    this.setState({
      changeBank: true,
    })

    console.log("changeBank: ", this.state.changeBank);
  }



  render() {
    const playerArr = this.state.gameState.players.map((player) => (
      <div key={player}>
      {player}
      <Button onClick = {(e) => this.changeBank(e)} className="center-block" variant="contained" color="primary">Edit Bank</Button>
      </div>
    ));

    return (
      <div>
      {this.state.changeBank?
        <div>
        <Bank />
        </div>
        :
        <div>
        <h1> Main!!! </h1>
        <h1> Turn {this.state.turn} </h1>
        {playerArr}
        </div>}
        </div>
      );
    }
  }

  export default Main
