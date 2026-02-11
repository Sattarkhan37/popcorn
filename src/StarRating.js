const coninerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};
const StarContainerStyle = {
  display: "flex",
  gap: "4px",
};
const testStyle = {
  lineHight: "1",
  margin: "0",
};
function StarRating({ maxRating = 5 }) {
  return (
    <div style={coninerStyle}>
      <div style={StarContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={testStyle}>10</p>
    </div>
  );
}

export default StarRating;
