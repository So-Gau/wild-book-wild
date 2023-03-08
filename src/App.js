import './App.css';
import Wilder from "./components/Wilder"
import { useState } from 'react';

const wildersData = [
  {
    name: "Ringo",
    city: "London",
    skills: [
      { title: "JS", votes: 10 },
      { title: "React", votes: 8 },
    ],
  },
  {
    name: "John",
    city: "Paris",
    skills: [
      { title: "PHP", votes: 9 },
      { title: "Symfony", votes: 9 },
    ],
  },
  {
    name: "George",
    city: "Berlin",
    skills: [
      { title: "Ruby", votes: 10 },
      { title: "JS", votes: 8 },
    ],
  },
  {
    name: "Paul",
    city: "Reims",
    skills: [
      { title: "C++", votes: 10 },
      { title: "Rust", votes: 8 },
    ],
  },
];

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
    <header>
      <div className="container">
        <h1>Wilders Book</h1>
      </div>
    </header>
    <main className="container">
      <h4>Wilders</h4>
      <section className="card-row">
        {/* <Wilder name={"joe lebrouck"} skills={"php"} />
        <Wilder name={"joe lafritek"} /> CODE EN DUR*/}
        {wildersData.map((wilder) => {
          return <Wilder name={wilder.name} skills={wilder.skills} />
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
