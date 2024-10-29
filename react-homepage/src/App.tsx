import DisplayProducts from "./components/DisplayProducts";
import Header from "./components/Header";
function App() {
  let items = ["a", "b", "c", "d"];
  let heading = [
    "Electronics",
    "Jewelry",
    "Men's Clothing",
    "Women's Clothing",
  ];

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <DisplayProducts items={items} heading={heading[0]} />
        <DisplayProducts items={items} heading={heading[1]} />
        <DisplayProducts items={items} heading={heading[2]} />
        <DisplayProducts items={items} heading={heading[3]} />
      </main>
    </>
  );
}

export default App;
