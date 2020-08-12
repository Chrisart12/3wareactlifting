import React, {Component} from 'react';
import './App.scss';
import BaseNumberInput from './components/BaseNumberInput';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        decimal: "",
        binary: ""
    }  
}

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value,
      binary: this.convertDecimalToBinary(e.target.value),
      // decimal: this.binaryToDecimal(e.target.value)
  })
}



convertDecimalToBinary = (number) => {
    let binary = "";
    let temp = number;

    while(temp > 0){
        if(temp % 2 === 0){
            binary = "0" + binary;
        }
        else {
            binary = "1" + binary;
        }

        temp = Math.floor(temp / 2);
    }

    return binary;
}


binaryToDecimal(binaryNumber){
  var total = 0;
  for(var i = 0; i < binaryNumber.length; i++){
      var bit = binaryNumber.charAt(binaryNumber.length - (i + 1 ));
      if(bit === 1){
          var temp = Math.pow(2, i* parseInt(bit));
          total += temp;
      }
  }

  return total;
}


  render() {
    const { decimal, binary } = this.state
      return (
          <div className="container">
              <BaseNumberInput type="decimal" handleChange={(e) => this.handleChange(e)} decimal={decimal} />
              <BaseNumberInput type="binary"  handleChange={(e) => this.handleChange(e)} decimal={binary} />
          </div>
      );
  }
}

export default App;
