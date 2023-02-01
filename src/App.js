import './App.css';

function App() {
  return (
    <div className="App">
     <div className="navbar">
      <div className='main-logo'>
      <img src='snail.png' className="snail-logo" alt='snails-logo'></img>
      <p className='text'>snailsGram</p>
      </div>
      <p className='text2'>Let's find some snails!</p>
      <button className='btn'>
        <a href='https://github.com/bronnyhub' className='bronnyhub' targer="_blank">@bronnyhub</a>
      </button>
     </div>

    <div className='galeria'>
      <button className='slimaki sl1'></button>
      <button className='slimaki sl2'></button>
      <button className='slimaki sl3'></button>
    </div>

    </div>
  );
}

export default App;
