import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      loggedIn: false,
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <div>
      {this.state.loggedIn} ?
        <div>
        <Main name={this.state.name} />

        </div>
        :
        <div>
        <h1> Monopoly Game! </h1>
        <div>
        <p>Enter your name below to get started </p>
        </div>
        <div className="form-group">
        <Input value={this.state.name} onChange={(e)=> this.handleName(e)} className="form-control" placeholder="Your name"></Input>
        </div>
        <Button className="center-block" variant="contained" color="primary">Join Game</Button>
        </div>
      );
    }
  }

  export default Main
