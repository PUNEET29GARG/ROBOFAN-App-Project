export default function Popup({ show }) {
  return (
    <>
      <div
        onClick={show}
        style={{
          heigth: "10px",
          width: "300px",
          position: "absolute",
          top: "35%",
          left: "25%",

          backgroundColor: "blueviolet",
          cursor: "pointer",
          textAlign: "end"
        }}
      >
        <div>x</div>
      </div>
    </>
  );
}
