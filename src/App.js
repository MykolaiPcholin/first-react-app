import './App.css';
import Card from './components/Card';

function App() {
  const cards = [
    {
      id: 0,
      name: "Name one",
      src: "https://m.media-amazon.com/images/I/41seITtY+vL._AC_SX342_.jpg"
    },
    {
      id: 1,
      name: "Name two",
      src: "https://media.studio7thailand.com/7094/iPhone_13_PDP_Position-1A_Color_Midnight__1-square_small.jpg"
    },
    {
      id: 2,
      name: "Name three",
      src: "https://crs.al/wp-content/uploads/2021/11/i13.jpg"
    }
  ];
  let elements = [];
  cards.forEach(element => {
    elements.push(<Card {...element}/>)
  })
  return (
    <div className="App">
      {elements}
    </div>
  );
}

export default App;
