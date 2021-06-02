import './App.css';
import DaysOtherDays from './DaysOtherDays/DaysOtherDays';
import DaysOtherDaysDuplicate from './DaysOtherDaysDuplicate/DaysOtherDaysDuplicate';
import NumSeries from './NumSeries/NumSeries';
import Addition from './AdditionSub/AdditionSub';
import AdditionSub from './AdditionSub/AdditionSub';
import Between from './Between/Between';

function App() {
  return (
    <div className="App">
      <header className="App-header">     
      </header>

      <DaysOtherDaysDuplicate />
      <NumSeries />
      <AdditionSub />
      <Between/>
    </div>
  );
}

export default App;
