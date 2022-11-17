import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="main_content">
        <h3>Personajes</h3>
        {products.map((product) => (
          <Item product={product} key={product.name} />
        ))}
        ;
      </div>
    </>
  );
};

export default ItemList;
