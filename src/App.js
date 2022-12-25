import './App.css';
import image from './assortment.jpg';
import imageTwo from './family.jpg';
import { ShoppingList } from './ShoppingList';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src={image} width="250px" alt='assortment'/>
      </div>
      <div className="container">
      <h1>Shopping List</h1>
      </div>
      <ShoppingList/>
      <div className="container">
      <img src={imageTwo} width="250px" alt='family'/>
      </div>
    </div>
  )
}

export default App