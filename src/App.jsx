import './App.css';
import { useState } from 'react';
import Character from './components/Character/Character';
import Display from './components/Display/Display';
import Picker from './components/Picker/Picker';


function App() {
// state lives here
 const [ head, setHead ] = useState('giraffee')
 const [ middle, setMiddle ] = useState('pizza')
 const [ leg, setLegs ] = useState('fish')
 const [ newPhrase, setPhrase ] = useState('')
 const [ phrases, setPhrases ] = useState([])

 // event handler
 const handleClick = () => {
   setPhrases((prevstate) => [...prevstate, newPhrase])
 }


  return (
    <div className='react-body'>
      <section className='sides'>left</section>
      <section className='cnt-box'>
      <h1>Character Builder </h1>
      <Picker  {... { head, middle, leg, setHead,  setLegs, setMiddle, setPhrase, handleClick } }/>
      <Character {... { head, middle, leg }}/>
      <Display phrases={phrases} />
      </section>
      <section className='sides'>right</section>

    </div>
  );
}

export default App;