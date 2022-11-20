import { data } from "../../data/data";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { characterName } = useParams();

  const getItems = new Promise((res, rej) => {
    setTimeout(() => {
      if (characterName) {
        const filteredData = data.filter((item) => {
          return item.house === characterName;
        });
        
        res(filteredData);
      } else {
        res(data);
      }
    
    }, 1000);
  });

  useEffect(() => {
    getItems.then((respuesta) => {
      setItems(respuesta);
    });
  }, [characterName]);

  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;
