import './App.css';
import { useState } from 'react';
import Character from './components/Character/Character';
import Display from './components/Display/Display';
import Picker from './components/Picker/Picker';


function App() {
// state lives here
 const [ head, setHead ] = useState('circle')
 const [ middle, setMiddle ] = useState('circle')
 const [ leg, setLegs ] = useState('circle')
 const [ feet, setFeet ] = useState('circle')
 const [ newPhrase, setPhrase ] = useState('circle')
 const [ phrases, setPhrases ] = useState([])

 // event handler
 const handleClick = () => {
   setPhrases((prevstate) => [...prevstate, newPhrase])
 }


  return (
    <>


    </>
  );
}

export default App;
