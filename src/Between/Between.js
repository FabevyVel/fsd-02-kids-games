import React, {Component} from 'react';

class Between extends Component {

    state = {
        before: 0, //Gamer will give
        between: 4,   //Program will give
        after: 0, //Gamer will give
        alphabets: {
            1: 'A',
            2: 'B',
            3: 'C',
            4: 'D',
            5: 'E',
            6: 'F',
            7: 'G',
            8: 'H',
            9: 'I',
            10: 'J',
            11: 'K',
            12: 'L',
            13: 'M',
            14: 'N',
            15: 'O',
            16: 'P',
            17: 'Q',
            18: 'R',
            19: 'S',
            20: 'T',
            21: 'U',
            22: 'V',
            23: 'W',
            24: 'X',
            25: 'Y',
            26: 'Z'
        },
        score: 0,
        result1: '',
        result2: ''
    }

    randomNumber = () => {
        let randomNumber = parseInt(Math.random() * 10);

        while (randomNumber <= 1 || randomNumber >= 26 || randomNumber == this.state.between) {
            randomNumber = parseInt(Math.random() * 10);
        }
        return randomNumber;
    }

    handleOnBetweenSelectChange = (event) => {
        this.setState({
            between: parseInt(event.target.value)
        });
    }


    handleSubmit = (event) => {

        let points = 0;
        if ((this.state.before + 1) === this.state.between) {
            points++;
            this.setState({
                result1: "Before Is Correct"
            });
        } else {
            points--;
            this.setState({
                result1: "Before Is Wrong"
            });
        }

        if (this.state.after - 1 === this.state.between) {
            points++;
            this.setState({
                result2: "After Is Correct"
            });
        } else {
            this.setState({
                result1: "After Is Wrong"
            });
        }

        this.setState({
            score: this.state.score + points
        });

        
        let newQuestion = this.randomNumber();
        this.setState({
            before: newQuestion 
            after: newQuestion
        });
    }

    handleNext = (event) => {
        let newQuestion = this.randomNumber();
        this.setState({
            before: newQuestion
            after: newQuestion
        });
    }

    render() {
        return (
            <div>
                <table>
                    <th>Between Alphabets</th>
                    <tbody>
                        <tr>
                            <th>Before</th>
                            <th>Between</th>
                            <th>After</th>
                        </tr>
                        <tr>
                            <td>
                                <select value={this.state.before} onChange={this.handleOnBeforeSelectChange}>
                                    <option value='22'>V</option>
                                    <option value='0'>Select Answer</option>
                                    <option value='1'>A</option>
                                    <option value='2'>B</option>
                                    <option value='3'>C</option>
                                    <option value='4'>D</option>
                                    <option value='5'>E</option>
                                    <option value='6'>F</option>
                                    <option value='7'>G</option>
                                    <option value='8'>H</option>
                                    <option value='9'>I</option>
                                    <option value='10'>J</option>
                                    <option value='11'>K</option>
                                    <option value='12'>L</option>
                                    <option value='13'>M</option>
                                    <option value='14'>N</option>
                                    <option value='15'>O</option>
                                    <option value='16'>P</option>
                                    <option value='17'>Q</option>
                                    <option value='18'>R</option>
                                    <option value='19'>S</option>
                                    <option value='20'>T</option>
                                    <option value='21'>U</option>
                                    <option value='23'>W</option>
                                    <option value='24'>X</option>
                                    <option value='25'>Y</option>
                                    <option value='26'>Z</option>
                                </select>
                            </td>
                            <td>
                                {this.state.alphabets[this.state.between]}
                            </td>
                            <td>
                                <option value='22'>V</option>
                                <option value='0'>Select Answer</option>
                                <option value='1'>A</option>
                                <option value='2'>B</option>
                                <option value='3'>C</option>
                                <option value='4'>D</option>
                                <option value='5'>E</option>
                                <option value='6'>F</option>
                                <option value='7'>G</option>
                                <option value='8'>H</option>
                                <option value='9'>I</option>
                                <option value='10'>J</option>
                                <option value='11'>K</option>
                                <option value='12'>L</option>
                                <option value='13'>M</option>
                                <option value='14'>N</option>
                                <option value='15'>O</option>
                                <option value='16'>P</option>
                                <option value='17'>Q</option>
                                <option value='18'>R</option>
                                <option value='19'>S</option>
                                <option value='20'>T</option>
                                <option value='21'>U</option>
                                <option value='23'>W</option>
                                <option value='24'>X</option>
                                <option value='25'>Y</option>
                                <option value='26'>Z</option>
                           
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <button onClick={this.handleSubmit}>Submit</button>
                            <button onClick={this.handleNext}>Next Question</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <div>Your Score: {this.state.score}</div>
                            <div>Last Question Result: {this.state.result1} &amp; {this.state.result2} </div>
                        </td>
                    </tr>
                 </tbody>
             </table>
            </div >
        )
    }
}
export default Between;