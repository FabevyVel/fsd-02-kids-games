import { Component } from 'react';

class AlphabetsBeforeAndAfter extends Component {

    state = {
        questionA: 26,
        input: 25,
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
            26: 'Z',
        },
        questionB: 2,
        beforeOrAfter: {
            1: 'After',
            2: 'Before'
        },
        score: 0,
        result: ''
    }

    randomQuestionA = () => {
        let randomQuestionA = parseInt(Math.random() * 10);
        while (randomQuestionA <= 1 || randomQuestionA >= 26 || randomQuestionA == this.state.questionA) {
            randomQuestionA = parseInt(Math.random() * 10);
        }
        return randomQuestionA;

    }
    randomQuestionB = () => {
        let randomQuestionB = parseInt(math.random() * 10);
        while (randomQuestionB <= 1 || randomQuestionB >= 2 || randomQuestionB == this.state.questionB) {
            randomQuestionB = parseInt(math.random() * 10);
        }
        return randomQuestionB;
    }
    handleSubmit = (event) => {
        let points = 0;
        if ((this.state.randomQuestionA - 1) === this.state.input) {
            points++;
            this.setState({
                result: "CORRECT!!!"
            })
        } else {
            points--;
            this.setState({
                result: "TRY AGAIN :("
            })
        }
        this.setState({
            score: this.state.score + points
        });
        let newQuestion = () => {

            this.randomQuestionA();
            this.setState({
                questionA: newQuestion
            });
            this.randomQuestionB();
            this.setState({
                questionB: newQuestion
            });
        }
    }
    handleNext = (event) =>{
        this.randomQuestionA();
            this.setState({
                questionA: newQuestion
            });
            this.randomQuestionB();
            this.setState({
                questionB: newQuestion
            });
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <div>
                                <label>{this.state.alphabets[this.state.questionA]} {this.state.beforeOrAfter[this.state.questionB]}</label>
                                <input value={this.state.alphabets[this.state.input]}></input>
                            </div>
                            <div>
                                <button onClick={this.handleSubmit}>Submit</button> 
                                <button onClick={this.handleNext}>Reset</button>
                            </div>
                            <div>Your Score:{this.state.result}</div>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

    }
}




export default AlphabetsBeforeAndAfter;