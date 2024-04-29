import "./admin.css";
import { getAllProducts } from "../service";
import { deleteProduct } from "../service";
import { useState, useEffect } from "react";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [inpPrice, setInpPrice] = useState("");
  const [inpImage, setInpImage] = useState("");

  async function addProduct() {
    const newProduct = {
      price: inpPrice,
      image: inpImage,
    };
    setInpPrice("");
    setInpImage("");
    fetch("https://fakestoreapi.com/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newProduct),
    }).then((res) => res.json());
  }

  useEffect(() => {
    async function handleProducts() {
      const data = await getAllProducts();
      setProducts(data);
    }
    handleProducts();
  }, []);
  return (
    <div>
      <div className="form">
        <input
          type="text"
          name=""
          id=""
          value={inpPrice}
          onChange={(e) => setInpPrice(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          value={inpImage}
          onChange={(e) => setInpImage(e.target.value)}
        />
        <button onClick={addProduct}>add</button>
      </div>
      <div className="adminContainer">
        {products.map((x) => (
          <div className="box" key={x.id}>
            <h4>{x.title}</h4>
            <h2>{x.price}$</h2>
            <p>{x.description}</p>
            <h4>{x.category}</h4>
            <img className="boxImg" src={x.image} alt="" />
            <button onClick={() => deleteProduct(x.id)}>delete</button>
            <button>edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
