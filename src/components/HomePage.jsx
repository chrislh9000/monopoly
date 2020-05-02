import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: true,
    }
  }
  render() {
    return (
      <div>
      <p> HEY </p>
      </div>
    );
  }
}

export default HomePage
