

export function Button(props) {
  
  const { onButtonLoad } = props;

  return (<button className="Button" onClick={onButtonLoad}>Button</button>)
  
}