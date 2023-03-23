const Input = (props) => {
  const handleInput = (ev) => {
    props.handleInputTel(ev.target.value);
  };
  return (
    <input
      className={props.className}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      onChange={handleInput}
    ></input>
  );
};

export default Input;
