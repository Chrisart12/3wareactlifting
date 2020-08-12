import React, { Component } from 'react'

class BaseNumberInput extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         decimal: ""
    //     }
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    
    render() {
        // const { decimal } = this.state
        const { type, handleChange, decimal } = this.props
        
        return (
            <div className="form-group col-6">
                <label htmlFor="decimal" >Number: {type} </label>
                <input type="text" className="form-control" id="decimal" 
                    onChange={(e) => handleChange(e)} value={decimal} name="decimal" />
            </div>
            
        )
    }
}

export default BaseNumberInput
