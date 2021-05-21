import React, {Component} from 'react';

class AdditionSub extends Component{

    state={
        viewQuestion1 : 2,
        viewQuestion2 : 2,
        
        Numbers:{
            1:'0',
            2:'1',
            3:'2',
            4:'3',
            5:'4',
            6:'5',
            7:'6',
            8:'7',
            9:'8',
            10:'9',
        },
        result : '',
        check : '',
        EnterTheValue:'',
        score: '0',
        correctAns:''
    }
    
    //ADDTION

    add = () =>{
        var add = (parseInt(this.state.Numbers[this.state.viewQuestion1])) + (parseInt(this.state.Numbers[this.state.viewQuestion2]))
        console.log(add)
        return add;
    }

    handleresult = (event) => {
        this.setState({result : parseInt(event.target.value)});
        
    }

    //LOGIC

    handlesubmit = (event) => {
        this.setState({result: ''})   
        this.setState({EnterTheValue: ''})

        if(this.add() === this.state.result){
            console.log('correct');
            setTimeout(() => {
                this.setState({
                    check : "Woot!!!",
                    score : parseInt(this.state.score + 1)
                });        
              }, 500);
            this.setState({correctAns: '(Answer is:'+ this.add()+')'})           
            this.setState({viewQuestion1: this.getRandomNumber()})
            this.setState({viewQuestion2: this.getRandomNumber()})   
        }
        else if(this.state.result === ''){
            console.log('Enter the Value');
            this.setState({EnterTheValue : 'Please Enter the Value'})  
        }
        else {
            console.log('Wrong');
            setTimeout(() => {
                this.setState({
                    check : "Nope!!!",
                    score : parseInt(this.state.score - 1)
                });   
            },500)  
            this.setState({correctAns: '(Correct Answer is:'+ this.add()+')'})    
            this.setState({viewQuestion1: this.getRandomNumber()})
            this.setState({viewQuestion2: this.getRandomNumber()})
            
        }    
        
    }
    
    // RANDOM NUMBER 
    getRandomNumber = () => {
    
        let randomNumber =parseInt(Math.floor(Math.random() * 10)) 
        while(randomNumber <= 0){
            randomNumber =parseInt(Math.floor(Math.random() * 10)) 
        }
        return randomNumber;
    }

    // RESET SCORE
    handlereset = (event) => {
        this.setState({result: ''})   
        this.setState({score: '0'})
        this.setState({EnterTheValue: ''})
    }



    render(){
        return(
            <div>
                <table>
                    <th>Addition</th>
                    <tr>
                        <td>
                            <label> {this.state.Numbers[this.state.viewQuestion1]} </label>
                            <label> + </label>
                            <label> {this.state.Numbers[this.state.viewQuestion2]} </label>
                            <label> = </label>
                            <input type="number" value={this.state.result} onChange={this.handleresult}></input>
                            <label> {this.state.EnterTheValue}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={this.handlesubmit}>Submit</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Last Question Answer: {this.state.check} {this.state.correctAns}</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Your Score: {this.state.score}  <button onClick={this.handlereset}>Reset Score</button>
                        </td>
                    </tr>

                </table>
            </div>
        );
    }
}
export default AdditionSub;