import { Component } from 'react';

class DaysOtherDaysDuplicate extends Component{

    state = {
        yesterday: 0, //Gamer will give
        today: 4,   //Program will give
        tomorrow: 0, //Gamer will give
        days: {
            1: 'Sunday',
            2: 'Monday',
            3: 'Tuesday',
            4: 'Wednesday',
            5: 'Thursday',
            6: 'Friday',
            7: 'Saturday'
        },
        score: 0,
        result1: '',
        result2: ''
    }

    randomNumber = () => {
        let randomNumber = parseInt(Math.random() * 10);

        while(randomNumber <= 1 || randomNumber >= 7 || randomNumber == this.state.today){
            randomNumber = parseInt(Math.random() * 10);
        }
        return randomNumber;
    }

    handleOnYesterdaySelectChange = (event) => {
        this.setState({
            yesterday: parseInt(event.target.value)
        });
    }

    handleOnTomorrowSelectChange = (event) => {
        this.setState({
            tomorrow: parseInt(event.target.value)
        });
    }

    handleSubmit = (event) => {

        let points = 0;

        //Validate Yesterday Answer
        if( (this.state.yesterday + 1) === this.state.today){
            points++;
            this.setState({
                result1: "Yesterday Is Correct"
            });
        }else{
            points--;
            this.setState({
                result1: "Yesterday Is Wrong"
            });
        }

        //Validate Tomorrow Answer
        if(this.state.tomorrow - 1 === this.state.today){
            points++;
            this.setState({
                result2: "Tomorrow Is Correct"
            });
        }else{
            this.setState({
                result1: "Tomorrow Is Wrong"
            });
        }

        this.setState({
            score: this.state.score + points
        });

        //New Question
        let newQuestion = this.randomNumber();
        this.setState({
            today: newQuestion
        });
    }

    handleNext = (event) => {
        let newQuestion = this.randomNumber();
        this.setState({
            today: newQuestion
        });
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
                            <select value={this.state.yesterday} onChange={this.handleOnYesterdaySelectChange}>
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
                            {this.state.days[ this.state.today ]}
                        </td>
                        <td>
                            <select value={this.state.tomorrow} onChange={this.handleOnTomorrowSelectChange}>
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
                        <td colSpan="3">
                            <button onClick={this.handleSubmit}>Submit</button>
                            <button onClick={this.handleNext}>Next Question</button></td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <div>Your Score: {this.state.score}</div>
                            <div>Last Question Result: {this.state.result1} &amp; {this.state.result2} </div>
                        </td>
                    </tr>
                 </tbody>
             </table>
            </div>
        )
    }
}

export default DaysOtherDaysDuplicate;