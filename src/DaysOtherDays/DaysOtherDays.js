import React, {Component} from 'react';

class DaysOtherDays extends Component{
 state = {
    yesterday: 0,
    tomorrow: 0,
    today: 5,
    days: {
        0: 'Select Answer',
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    },
    question: 1,
    score: 0
 }

 handleYesterdayChange = (event) => {
    this.setState({yesterday: parseInt(event.target.value)});
 }

 handleTomorrowChange = (event) => {
    this.setState({tomorrow: parseInt(event.target.value)});
 }

 handleSubmit = (event) => {
     let currentScore = this.state.score;
     console.log(this.state.yesterday);
     if (this.state.yesterday + 1 == this.state.today){
        currentScore++;
        console.log('correct Yes');
        this.setState({score: currentScore });
     }
     if (this.state.tomorrow - 1 == this.state.today){
        currentScore++;
        this.setState({score: currentScore + 1 });
        console.log('correct Tom');
     }
     console.log(currentScore);
    let newQuestion = this.getRandomNumber();
 }

 getRandomNumber = () => {
    let randomNumber = parseInt(Math.random() * 10);
    while(randomNumber === this.state.question || randomNumber <= 0 || randomNumber >= 7 ){
        randomNumber = parseInt(Math.random() * 10);
    }

    this.setState({question: randomNumber});

    return randomNumber;
 }

 render(){
     return(
         <div>
             <table>
                 <tbody>
                    <tr>
                        <th>Yesterday</th>
                        <th>Today</th>
                        <th>Tomorrow</th>
                    </tr>
                    <tr>
                        <td>
                            <select value={this.state.yesterday} onChange={this.handleYesterdayChange}>
                                <option value='0'>Select Answer</option>
                                <option value='3'>Tuesday</option>
                                <option value='6'>Friday</option>
                                <option value='7'>Saturday</option>
                                <option value='2'>Monday</option>
                                <option value='1'>Sunday</option>
                                <option value='4'>Wednesday</option>
                                <option value='5'>Thursday</option>
                            </select>
                        </td>
                        <td>
                            {this.state.days[this.state.today]}
                        </td>
                        <td>
                        <select value={this.state.tomorrow} onChange={this.handleTomorrowChange}>
                                <option value='0'>Select Answer</option>
                                <option value='6'>Friday</option>
                                <option value='1'>Sunday</option>
                                <option value='7'>Saturday</option>
                                <option value='2'>Monday</option>
                                <option value='5'>Thursday</option>
                                <option value='4'>Wednesday</option>
                                <option value='3'>Tuesday</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3"><button onClick={this.handleSubmit}>Submit</button></td>
                    </tr>
                 </tbody>
             </table>
         </div>
     );
 }
}

export default DaysOtherDays;