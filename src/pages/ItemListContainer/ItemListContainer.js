
  import { data } from '../../data/data';
  import { useState, useEffect } from 'react';
  import ItemList from '../../components/ItemList/ItemList';
  
  const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getItems = new Promise((res, rej) => {
      setTimeout(() => {
          res(data);
      }, 1000);
  });
  
  useEffect(() => {
    getItems.then((respuesta) => {
      setItems(respuesta);
    });
    setTimeout(() => {
      console.log(items)
    }, 3000);
  }, [items]);

    return (
      <div>
        <ItemList products = {items}/>
      </div>
    )
  }
 
export default ItemListContainer;