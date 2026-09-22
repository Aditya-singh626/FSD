import image from "../assets/react.svg";
import "./Item.css";
const Item = ({props}) => {
  return (
    <div className="item display: flex; justify-content: center; align-items: center;">
      <img src={props.image} alt="item" className="item-image" />
      <h2>Title : {props.title}</h2>
      <h3>Price : ${props.price}</h3>
      <button className="item-button">Add to Cart</button>
    </div>
  );
};

export default Item;
