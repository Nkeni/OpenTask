import PlayersList from './MainPage/Main';
import './App.scss';
import FormComponent from './AddPlayer/AddPlayer';

function App() {
  return (
    <div className="App">
       <PlayersList/>
       <FormComponent/>
    </div>
  );
}

export default App;
