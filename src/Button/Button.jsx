function Button() {
  const handleClick = (e) => (e.target.textContent = "OUCH D: !");

  return <button onDoubleClick={(e) => handleClick(e)}>Click me :D</button>;
}

export default Button;
