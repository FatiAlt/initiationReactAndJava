
import './App.css';
import Button from './Button';
import FunctionalButton from './FunctionalButton';
import Input from './input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button text='Submit' disabled={false} />
       <Button text='Click' disabled />
       <Button text='Disable' />
       <Button text='Add to cart' />
      

       <FunctionalButton text='Hello' type='Submit' />
    
       <Input/>
       
      </header>
    </div>
  );
}

export default App;
