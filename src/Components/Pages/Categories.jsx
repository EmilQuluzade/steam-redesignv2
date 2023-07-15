import { useState } from 'react';
import items from '../Data/Categories.json';
import Menu from '../Parts/MenuCategories';
import Button from '../Parts/ButtonCategoties';

const allCategories = ['All', ...new Set(items.map(item => item.genre))];

function Categories() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(items);
    } else {
      const filteredData = items.filter(item => item.genre === button);
      setMenuItem(filteredData);
    }
  };
  

  return (
    <div className="categories">
      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

    </div>
  );
}
export default Categories