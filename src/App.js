import './App.css';

function App() {
  return (
    <div className="App">
     <div className="navbar">
      <img src='snail.png' className="snail-logo" alt='snails-logo'></img>
      <p className='text'>snailsGram</p>
      <button className='btn'>MAIN</button>
      <button className='btn'>BACKGROUND</button>
      <button className='btn'>CONTACT</button>
     </div>

    <div className='gallery'>
      <img src='snail1.jpg' className='snails' alt='snails'></img>
      <img src='snail2.jpg' className='snails' alt='snails'></img>
      <img src='snail3.jpg' className='snails' alt='snails'></img>
    </div>

    </div>
  );
}

export default App;
