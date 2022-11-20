import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { data } from "../../data/data";

const ItemDetailContainer = () => {
  const [chaterSelect, setCharacterSelect] = useState();
  const { id } = useParams();


  const getCharacter = () => {
    const characterFiltered = data.filter((character) => {
      
      return character.id == id;
    });
    setCharacterSelect(...characterFiltered);
  };

  useEffect(() => {
    getCharacter();
  }, [id]);

  

  return (
    <div>

      {chaterSelect && <ItemDetail characterSelect = {chaterSelect} />}
      
    </div>
  );
};

export default ItemDetailContainer;
