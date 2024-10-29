interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
interface Props {
  items: Product[];
  heading: String;
}

function DisplayProducts({ items, heading }: Props) {
  return (
    <>
      <br />
      <h1>{heading}</h1>
      <div className="category-products">
        {items.map((item) => (
          <div className="product-card">
            <img className="productimg" src={item.image}></img>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <br />
    </>
  );
}

export default DisplayProducts;
