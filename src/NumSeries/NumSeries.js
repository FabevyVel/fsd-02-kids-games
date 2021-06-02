import {Component} from 'react';

class NumSeries extends Component{
    
    state = {
        viewQuestion : 1,
        Questions : {
            1: '1,2,3,',
            2: '7,8,9',
            3: '12,13,14,',
            4: '66,67,68,',
            5: '97,98,99,'
        }
    }

    randomNumber = () => {
        let randomNumber = parseInt(Math.random() * 5);
        while(randomNumber < 1 || randomNumber > 5){
            randomNumber = parseInt(Math.random() * 5);
        }
        return randomNumber;
    }

    handleSubmit = (event) => {
        console.log(this.randomNumber());
    }

    handleReset = (event) => {
        // Do something to get question
    }

    render(){
        return (
            <div>
                
                <div>
                <label>{this.state.Questions[this.state.viewQuestion]}</label><input></input>
                </div>

                <div>
                <button onClick = {this.handleSubmit}> Submit</button> 
                <button onClick = {this.handleReset}> Reset </button>
                </div>

                <div>
                    Results
                </div>
            </div>
        )
    }
}

export default NumSeries;

{/* <table>
                    <tbody>
                        
                        <tr>
                            <td>1,2,3, <input></input></td>
                        </tr>
                        
                        <tr>
                            <td><button>Submit</button><button>Reset</button></td>
                        </tr>

                        <tr>
                            <td>Results</td>
                        </tr>
                    </tbody>
                </table> */}