interface Props {
  items: String[];
  heading: String;
}

function DisplayProducts({ items, heading }: Props) {
  return (
    <>
      <h1>{heading}</h1>
      <div className="category-products">
        {items.map((item) => (
          <div className="product-card">
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayProducts;
