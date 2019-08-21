import React, { Component } from 'react';
import './App.css';
import TableData from './TableData';
import CardData from './CardData';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { tableFlag :true, cardFlag : false}
  }

  handleClickTable = () => {
    this.setState ({
      cardFlag: false,
      tableFlag: true,
    })
  }

  handleClickCard = () => {
    this.setState ({
      cardFlag: true,
      tableFlag: false,
    })
  }


  render() {
    return (
      <div>
        <Button onClick={this.handleClickTable} variant="contained" color="primary">Table Data</Button>
        <Button onClick={this.handleClickCard} variant="contained" color="secondary">Card Data</Button>
        {this.state.tableFlag && <TableData />}
        {this.state.cardFlag && <CardData />}
      </div>
    );
  }
}

export default App;
