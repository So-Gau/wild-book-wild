import './App.css';
import axios from 'axios';
import Wilder from "./components/Wilder"
import Form from './components/Form';
import { useEffect, useState } from 'react';


const App = () => {
  const [wilders, setWilders] = useState([]);
  const [counter, setCounter] = useState(0);

  //Stock les résultats dans le state
  useEffect(() => {
    const fetchData = async () => {
       const wilders = await axios.get("http://localhost:3000/api/Wilder")
       console.log(wilders.data);
       setWilders(wilders.data);
    };

    fetchData();
  },[]);//tableau vide ne sera appelée qu'une seule fois lors de la première exécution du composant.
  return (
    <div>
    <header>
      <div className="container">
        <h1>Wilders Book</h1>
      </div>
    </header>
    <div className='formRow'>
      <Form  />
    </div>
    <main className="container">
      <h4>Wilders</h4>
      <section className="card-row">
        {wilders.map((wilder) => {
          return <Wilder
          key={wilder.id}
          name={wilder.name} 
          city={wilder.city}
          id={wilder.id}
          skills={wilder.skills} />
        })}
      </section>
    </main>
    <footer>
      <div className="container">
        <p>&copy; 2022 Wild Code School</p>
      </div>
    </footer>
    <p>
      Currently at {counter}
    </p>
    <button onClick={() => setCounter(counter + 1)}> click me!
    </button>
  </div>
  );
}



export default App;
