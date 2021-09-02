import Button from './components/Button';

function HelloWolrd(){
  return(
    <Button>Teste</Button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          < HelloWolrd />
      </header>
    </div>
  );
}

export default App;
