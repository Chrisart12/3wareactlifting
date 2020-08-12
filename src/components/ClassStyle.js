import React, { Component } from 'react'

const users = [
    { id : 1, name : "Alice" },
    { id : 2, name : "Alan"  },
    { id : 3, name : "Phil" },
    { id : 4, name : "Naoudi" },
    { id : 5, name : "Fenley" },
];

/**
 *  @style des list des users au survol
*/
const styles = [
    {color :"#721c24", backgroundColor : "#f5c6cb"},
    {color :"#155724", backgroundColor : "#c3e6cb"},
];

class ClassStyle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            myColor: "",
            myBackground: ""
        }
    }

    handleMouseOver = () => {
        this.setState({
            myColor: this.shuffelWord("721c24"),
            myBackground: this.shuffelWord("f5c6cb")
        })
        
    }

    handleMouseOut = () => {
        this.setState({
            myColor: this.shuffelWord("155724"),
            myBackground: this.shuffelWord("c3e6cb")
        })
    }

    // shuffle = (a) => {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }

   shuffelWord = (word) => {
        var shuffledWord = '';
        word = word.split('');
        while (word.length > 0) {
          shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
        }
        return shuffledWord;
    }


    
    render() {

        const myStyle = {
            color: `#${this.state.myColor}`,
            // backgroundColor: `#${this.props.color}`
            backgroundColor: `#${this.state.myBackground}`
        }

       const  myClass = "list-group-item d-flex justify-content-between align-items-center"

        return (
            <div className="container">
                <div className="row" >
                    <div className="col-md-6">
                        <nav className="nav nav-pills flex-column flex-sm-row">
                        <a href="#" className="flex-sm-fill text-sm-center nav-link active">Shuffle</a>
                        </nav>
                    </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group list-group-vertical-lg">
                            {
                                users.map((user, index) => 
                                    <li className={myClass} 
                                        key={index} onMouseOver={this.handleMouseOver}
                                            onMouseOut={this.handleMouseOut} 
                                            style={myStyle}
                                        >
                                            {user.name}
                                        <span className="badge badge-primary badge-pill">{user.id} </span>
                                    </li>
                                )
                            }
                            
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ClassStyle

{/* <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>
</ul> */}