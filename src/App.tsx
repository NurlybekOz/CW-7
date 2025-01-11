import {useState} from "react";
import './App.css'
import hamburgerImage from './assets/burger.png';
import coffeeImage from './assets/coffee-cup.png';
import cheeseBurgerImage from './assets/cheeseburger.png';
import teaImage from './assets/mug.png';
import friesImage from './assets/french-fries.png';
import colaImage from './assets/soda.png';
import Details from "./components/Details/Details.tsx";
import Items from "./components/Items/Items.tsx";
interface ItemsProps {
  name: string;
  count: number;
  price: number;
  image: string;
}

const App = () => {
  const [items, setItems] = useState<ItemsProps[]>([
    {name: 'Hamburger', count: 0, price: 80, image: hamburgerImage},
      {name: 'Coffee', count: 0, price: 70, image: coffeeImage },
    {name: 'CheeseBurger', count: 0, price: 90, image: cheeseBurgerImage},
      {name: 'Tea', count: 0, price: 50, image: teaImage },
    {name: 'Fries', count: 0, price: 45, image: friesImage},
    {name: 'Cola', count: 0, price: 40, image: colaImage},
  ]);
    const [total, setTotal] = useState<number>(0);
    const updateTotal = (newItems: { name: string; count: number; price: number }[]) => {
        const newTotal = newItems.reduce((sum, item) => {
            return sum + item.count * item.price;
        }, 0);
        setTotal(newTotal);
    };
    const addItem = (index: number) => {
        const newItems = items.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    count: item.count + 1,
                };
            }
            return item;
        })
        setItems(newItems);
        updateTotal(newItems);
    }
    const deleteItem = (index: number) => {
        const newItems = items.map((item, i) => {
            if (i === index && item.count > 0) {
                return {
                    ...item,
                    count: item.count - 1,
                };
            }
            return item;
        })
        setItems(newItems);
        updateTotal(newItems);
    }

  return (
      <div className='FastFood'>
        <div className='details'>
                {items.map((item, index) => (
                <Details item={item} index={index} onDelete={() => deleteItem(index)} />
            ))}
            {total === 0 && (
                <strong className='total'>Order is empty! <br/> please add some items!</strong>
            )}
            {total > 0 && (
                <strong className='total'>Total price: {total} KGS</strong>
            )}
        </div>
          <div className='items'>
          {items.map((item, index) => (
              <Items item={item} index={index} onAdd={() => addItem(index)}/>
          ))}
        </div>
      </div>
  )
};

export default App
