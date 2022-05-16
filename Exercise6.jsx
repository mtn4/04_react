const Card = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 250,
        height: 400,
        marginBottom: 100,
      }}
    >
      <img src={props.url} width="100%" height="150"></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export const Exercise6 = () => (
  <div className="container">
    <Card
      url="https://static.timesofisrael.com/www/uploads/2018/07/iStock-467607415.jpg"
      title="dasdsadas"
      description="dasdsa"
      link=""
    />
    <Card
      url="https://static.timesofisrael.com/www/uploads/2018/07/iStock-467607415.jpg"
      title="70dds0"
      description="dasdmnbas"
      link=""
    />
    <Card
      url="https://static.timesofisrael.com/www/uploads/2018/07/iStock-467607415.jpg"
      title="dsd"
      description="dscxadas"
      link=""
    />
  </div>
);
