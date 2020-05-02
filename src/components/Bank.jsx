import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'

class Bank extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameState: {},
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
        <h1> BANK!!! </h1>
        </div>
      );
    }
  }

  export default Bank
