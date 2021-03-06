import './App.css';

function Header(props) {
  // console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>

  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Black bean beaf",
  "Peiking duck",
  "Mixed vegitables"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
// console.log(dishObjects);

// dishes.map((dish) => console.log(dish) );

function App() {
  return (
    <div className="App">
      <Header name="Jayson" />
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;

