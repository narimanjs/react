import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper color='lightblue'>
        <h2>inside hello from wrapper</h2>
        <p>
          Accusamus quaerat officiis incidunt veritatis voluptate commodi
          placeat omnis nulla. Aspernatur, excepturi, nam, repellendus fugit
          eaque voluptatibus praesentium quas unde minima numquam deserunt
          expedita asperiores deleniti commodi adipisci nemo at. Rem at nulla
          accusantium. Sit voluptates repellendus quaerat quas?
        </p>
        <button>click App.js</button>
      </Wrapper>
      <Wrapper color='lightgreen'>
        <h2>another hello from wrapper</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          suscipit exercitationem hic soluta facilis fugit nostrum? Natus sequi
          rem a, exercitationem perspiciatis doloremque repellendus ullam facere
          aperiam sit! Nam, iste!
        </p>
        <input
          type='text'
          placeholder='Enter value'
        />
      </Wrapper>
    </div>
  );
}

export default App;
