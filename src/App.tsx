import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  let itemHeading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {" "}
      <ListGroup
        items={items}
        heading={itemHeading}
        onSelectItem={handleSelectItem}
      />{" "}
    </div>
  );
}

export default App;
