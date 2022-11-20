import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

  return (
    <Link to={`/item/${product.id}`}>
     

<div className="card">
        <img className="card-img-top" src={product.image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>


     
    </Link>
  );
}

export default Item;