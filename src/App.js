import React, { Component } from 'react';
import './App.css';
import Validation from './Components/ValidationComponent';
import Char from './Components/CharComponent';


class App extends Component {
  state = {
    numberOfChar: null,
    newString: []
  }

  charLengthHandler = (event) => {
    const totalChar = event.target.value.length;
    const userInput = event.target.value
    const newString = userInput.split('');
    console.log(userInput);
    // console.log(totalChar);
    this.setState({numberOfChar: totalChar, newString: newString})
  }

  deleteCharHandler = (charIndex) => {
    const letters = [...this.state.newString];
    letters.splice(charIndex, 1);
    this.setState({newString: letters});
  }

  render() {
    let array = null;

    if (this.state.newString.length > 0) {
      array = (
        this.state.newString.map((l, index) => {
          return(
            <Char 
            letter={l}
            click={() => this.deleteCharHandler(index)} />
          )
        })
      )
    }

    return (
      <div className="App">
        <p>Enter something into the input box, it should return you a card with every letter in the string you typed into the input. Then you can click that card to delete it.</p>
        <input type='text' placeholder='Enter Something Here..' onChange={(event) => this.charLengthHandler(event)} />
        <br/>
        {this.state.numberOfChar}
        <Validation length={this.state.numberOfChar} />
        {array}
      </div>
    );
  }
}

export default App;
