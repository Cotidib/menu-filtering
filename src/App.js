import React , {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =  new Set (items.map((item) => item.category)); //object with unique values
const allCategoriesArray = ['all', ...allCategories];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategoriesArray);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='main-container'>
        <h2 className='main-title'>our menu</h2>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
