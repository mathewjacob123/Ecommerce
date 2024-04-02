import { CiStar } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
export default function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="card">
<img src={img}alt={title} className="card-img"/>
<div className="card-deatails">
 <h3 className="card-title">{title}</h3>
 <section className="card-reviews"></section>
 {star}{star}{star}{star}
 <span className="total-reviews">{reviews}</span>
 <section className="card-price">
  <div className="price">
    <del>{prevPrice}</del>{newPrice}
  </div>
  <div className="bag">
  <FaShoppingBag className="bag-icon"/>
  </div>
 </section>
</div>
  </section>
  )
};
