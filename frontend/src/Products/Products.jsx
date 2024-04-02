import Card from "../Components/Card";
import "./products.css";

export default function Products({result}) {
  return (
    <section className="card-container">
      {result}
      
    </section>
  );
}