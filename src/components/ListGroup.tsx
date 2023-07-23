function ListGroup() {
  let items = ["New York", "Tokyo", "Bangalore", "Delhi", "Paris"];
  //   items = [];

  //using const to check condition
  //   const message = items.length === 0 ? <p>No item found</p> : null;

  // using function to check condition
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Using logic
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1> List</h1> <p>No items found</p>
  //       </>
  //     );

  return (
    //Fragment
    <>
      <h1>List</h1>
      {/*message */}
      {getMessage()}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className="list-group-item"
            key={items}
            onClick={() => console.log(items, index)}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
