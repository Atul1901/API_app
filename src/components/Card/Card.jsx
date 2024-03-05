import "./styles.css";

const Card = ({ title, description, img, genre }) => {
  const containerStyle = {
    backgroundImage: `url(${img})`, // Set the background image using the img prop
  };

  return (
    <div className="container" style={containerStyle}>
      {/* <img></img> */}
      <div className="top-box">
        <p className="movie-name">{title}</p>
        <p className="stars">***</p>
      </div>
      <div className="bottom-box">
        <div className="info-topbox">
          <p className="movie-type">6 Ep</p>
          <p className="movie-type">{genre}</p>
        </div>
        <div className="card-bottons">
          <button>More info</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
