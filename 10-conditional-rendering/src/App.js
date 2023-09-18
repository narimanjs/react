import './App.css';
import PetInfo from './components/PetInfo';
function App() {
  return (
    <div className='App'>
      <PetInfo
        animal='dog'
        age={5}
        hasPet={false}
      />
      <PetInfo
        animal='cat'
        age={3}
        hasPet
      />
    </div>
  );
}

export default App;
