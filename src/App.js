import './App.css';
import DaysOtherDays from './DaysOtherDays/DaysOtherDays';
import DaysOtherDaysDuplicate from './DaysOtherDaysDuplicate/DaysOtherDaysDuplicate';
import NumSeries from './NumSeries/NumSeries';
import Addition from './AdditionSub/AdditionSub'
import AdditionSub from './AdditionSub/AdditionSub';
import AlphabetsBeforeAndAfter from './AlphabetsBeforeAndAfter/AlphabetsBeforeAndAfter'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <table>
        <thead>
          <tr>
            <th>Game Name</th>
            <th>Category</th>
            <th>Done By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Series</td>
            <td>Numbers</td>
            <td>Harish</td>
          </tr>
          <tr>
            <td>Between</td>
            <td>Numbers</td>
            <td>Gowtham</td>
          </tr>
          <tr>
            <td>Before &amp; After</td>
            <td>Numbers</td>
            <td>Ashwin</td>
          </tr>
          <tr>
            <td>Addition &amp; Sub</td>
            <td>Numbers</td>
            <td>Mathan</td>
          </tr>
          <tr>
            <td>Series</td>
            <td>Alphapets</td>
            <td>Ram</td>
          </tr>
          <tr>
            <td>Between</td>
            <td>Alphapets</td>
            <td>Monisha</td>
          </tr>
          <tr>
            <td>Before &amp; After</td>
            <td>Alphapets</td>
            <td>Abinesh</td>
          </tr>
          <tr>
            <td>Before &amp; After</td>
            <td>Days</td>
            <td></td>
          </tr>
          <tr>
            <td>Spelling Check</td>
            <td>Days</td>
            <td></td>
          </tr>
          <tr>
            <td>Between</td>
            <td>Days</td>
            <td></td>
          </tr>
          <tr>
            <td>Other Days</td>
            <td>Days</td>
            <td>Vel</td>
          </tr>
          <tr>
            <td>Form the cycle</td>
            <td>Days</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <DaysOtherDaysDuplicate />
      <NumSeries />
      <hr></hr>
      <AlphabetsBeforeAndAfter />
      <AdditionSub />
    </div>
  );
}

export default App;
