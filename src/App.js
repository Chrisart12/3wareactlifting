import React, {Component} from 'react';
import './App.scss';
import BaseNumberInput from './components/BaseNumberInput';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        decimal: "",
        binary: "",
        b: "b",
        d: "d"
    }  
}

handleChange = (e, base) => {
  
  if(base === "d") {
    console.log("1", base)
    console.log(e.target.value)
    this.setState({
      // [e.target.name]: e.target.value,
      binary: this.convertDecimalToBinary(e.target.value),
      decimal: e.target.value
    })
  } else {
    console.log("2", base)
    
  
    this.setState({
      // [e.target.name]: e.target.value,
      decimal: this.binaryToDecimal(e.target.value),
      binary: e.target.value,
      
    }, console.log("this.state.decimal", this.state.decimal))
  }
  
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
      if(bit == 1){
          var temp = Math.pow(2, i* parseInt(bit));
          total += temp;
      }
  }

  return total;
}

// componentDidMount() {
//   console.log(this.binaryToDecimal("100"))
// }


  render() {
    const { decimal, binary, d, b } = this.state
      return (
          <div className="container">
              <BaseNumberInput type="decimal" handleChange={(e) => this.handleChange(e, d)} decimal={decimal} />
              <BaseNumberInput type="binary"  handleChange={(e) => this.handleChange(e, b)} decimal={binary} />
          </div>
      );
  }
}

export default App;
