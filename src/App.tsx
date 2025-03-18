import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  let itemHeading = "Cities";

  return (
    <div>
      {" "}
      <ListGroup items={items} heading={itemHeading} />{" "}
    </div>
  );
}

export default App;
