const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box className="small-box box" text="Small" />
      <Box className="medium-box box" text="Medium" />
      <Box className="large-box box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
