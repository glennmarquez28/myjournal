import MyJournalThoughts from './components/MyJournalThoughts';
import MyJournalTask from './components/MyJournalTask';
import './App.css';

function App() {
  return (
    <div className='d-flex flex-row' style={{width: "100%"}}>
      <div>
      <MyJournalThoughts/>
      </div>
      <div>
      <MyJournalTask/>
      </div>
    </div>
  );
}

export default App;
