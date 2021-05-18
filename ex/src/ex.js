import React,{useState} from 'react';


const rowStyle = {
    display: 'flex'
}

const squareStyle = {
    'width': '60px',
    'height': '60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'white'
}

const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
}

const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}

const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#8acaca',
    'color': 'white',
    'fontSize': '16px',
}
var playerPlay = 0
var row1 = [0,0,0]
var row2 = [0,0,0]
var row3 = [0,0,0]

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            row1: [0, 0, 0],
            row2: [0, 0, 0],
            row3: [0, 0, 0],
        }
        
    }

    retunXO() {
        if (playerPlay === 0) {
            return ('n')
        }
        if (playerPlay === 1) {
            return ('x')
        } else {
            return ('o')
        }
    }

    XOfn() {
        var data = this.props.data
        switch (data.row) {
            case 0:
                switch (data.col) {
                    case 0:
                        return this.retunXO()
                    case 1:
                        return this.retunXO()
                    default:
                        return this.retunXO()
                }
            case 1:
                switch (data.col) {
                    case 0:
                        return this.retunXO()
                    case 1:
                        return this.retunXO()
                    default:
                        return this.retunXO()
                }
            default:
                switch (data.col) {
                    case 0:
                        return this.retunXO()
                    case 1:
                        return this.retunXO()
                    default:
                        return this.retunXO()
                }
        }
    }

    async updataPlay (data)  {
        if (playerPlay == 2) {
            playerPlay = 0
        }
        if (playerPlay == 1) {
            playerPlay = 2
        }
        if (playerPlay == 0) {
            playerPlay = 1
        }
        var dat1 = this.state.row1
        var dat2 = this.state.row2
        var dat3 = this.state.row3
        var state = this.state
        console.log("data = ",data);
        if (data) {
            switch  (data.row) {
                case 0:
                    var updata = []
                    dat1.map((item, i) => {
                        console.log("item = ",item);
                        if (data.col == i && item == 0) {
                            updata.push(playerPlay)
                        } else {
                            updata.push(item)
                        }
                    })
                    await this.setState({ ...state,row1: updata })
                    break
                    
                case 1:
                   
                    var updata = []
                    dat2.map((item, i) => {
                        if (data.col == i && item == 0) {
                            updata.push(playerPlay)
                        } else {
                            updata.push(item)
                        }
                    })
                    await this.setState({ row2: updata })
                    break
                    
                default:
                    var dat = this.state.row3
                    var updata = []
                    dat3.map((item, i) => {
                        if (data.col == i && item == 0) {
                            updata.push(playerPlay)
                        } else {
                            updata.push(item)
                        }
                    })
                    await this.setState({ row3: updata })
                
                    break
            }
          
        }
        console.log("this.state ",this.state);
    }

    render() {
        return (
            <div
                className="square"
                style={squareStyle}>
                <button onClick={() => this.updataPlay(this.props.data)} > {this.XOfn()}</button>
            </div>
        );
    }
}




const  SquareHook = (props) =>{
    const retunXO = () => {
        if (playerPlay === 0) {
            return ('n')
        }
        if (playerPlay === 1) {
            return ('x')
        } else {
            return ('o')
        }
    }
    const XOfn = () => {
        var data = props.data
        switch (data.row) {
            case 0:
                switch (data.col) {
                    case 0:
                        return retunXO()
                    case 1:
                        return retunXO()
                    default:
                        return retunXO()
                }
            case 1:
                switch (data.col) {
                    case 0:
                        return retunXO
                    case 1:
                        return retunXO
                    default:
                        return retunXO
                }
            default:
                switch (data.col) {
                    case 0:
                        return retunXO
                    case 1:
                        return retunXO
                    default:
                        return retunXO
                }
        }
    }
    const  updataPlay  = () => {
        if (playerPlay == 2) {
            playerPlay = 0
        }
        if (playerPlay == 1) {
            playerPlay = 2
        }
        if (playerPlay == 0) {
            playerPlay = 1
        }
        var updata = []
        if (props) {
            switch  (props.row) {
                case 0:
                   
                    row1.map((item, i) => {
                        console.log("item = ",item);
                        if (props.col == i && item == 0) {
                            updata.push(playerPlay)
                        } else {
                            updata.push(item)
                        }
                    })
                    
                    break
                    
                case 1:

                    row2.map((item, i) => {
                        if (props.col == i && item == 0) {
                            updata.push(playerPlay)
                        } else {
                            updata.push(item)
                        }
                    })
                  
                    break
                default:
                    row3.map((item, i) => {
                        if (props.col == i && item == 0) {
                            updata.push(playerPlay)
                        } else {
                            updata.push(item)
                        }
                    })
                  
                    break
            }
        }
        console.log(row1)
        console.log(row2)
        console.log(row3)
    }

        return (
            <div
                className="square"
                style={squareStyle}>
                <button onClick={() => updataPlay()} >{XOfn()}</button>
            </div>
        );
    
}


const  Board = () =>{ 
        return (
            <div style={containerStyle} className="gameBoard">
                <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
                <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
                <button style={buttonStyle}>Reset</button>
                <div style={boardStyle}>
                    <div className="board-row" style={rowStyle}>
                        <SquareHook data={{ row: 0, col: 0 }} />
                        <SquareHook data={{ row: 0, col: 0 }} />
                        <SquareHook data={{ row: 0, col: 0 }} />
                    </div>
                    <div className="board-row" style={rowStyle}>
                        <Square data={{ row: 1, col: 0 }} />
                        <Square data={{ row: 1, col: 1 }} />
                        <Square data={{ row: 1, col: 2 }} />
                    </div>
                    <div className="board-row" style={rowStyle}>
                        <Square data={{ row: 2, col: 0 }} />
                        <Square data={{ row: 2, col: 1 }} />
                        <Square data={{ row: 2, col: 2 }} />
                    </div>
                </div>
            </div>
        );
    }



export default class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}
