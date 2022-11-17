import './Item.css';

const Item = ({ product }) => {
  return (
    <>
     

<div className="card">
        <img className="card-img-top" src={product.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>


     
    </>
  );
}

export default Item;