const {useState} = React;

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const style = {
    fontWeight: isHovering ? 'bold' : 'normal'
  };

  return (
    <li
    style={style}
    onMouseEnter={() => setIsHovering(!isHovering)}
    onMouseLeave={() => setIsHovering(!isHovering)}
    >
      {props.item}
    </li>
  );
};

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

ReactDOM.render(<GroceryList items={['stuff', 'more stuff', 'even more stuff']}/>, document.getElementById('app'));