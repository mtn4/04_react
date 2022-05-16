const ButtonComponent = (props) => (
  <button style={{ fontWeight: `${props.weight}`, marginRight: 10 }}>
    {props.text}
  </button>
);

export const Exercise5 = () => (
  <div className="container">
    <ButtonComponent text="Important" weight="700" />
    <ButtonComponent text="Not Important" weight="" />
  </div>
);
