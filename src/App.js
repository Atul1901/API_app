import { useEffect, useState } from "react";
import "./styles.css";

import movieAPi from "./utils/Api";

// import Home from "./components/Home";
import Movies from "./components/Movies";
import Card from "./components/Card/Card";

function App() {
  const [movie, setMovie] = useState();

  const apiCall = async () => {
    // const res = await movieAPi();
    setMovie(res.data.results);

    console.log("response2", res.data.results);
  };
  console.log("movie:", movie);

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="layout">
      {movie &&
        movie.map((item) => (
          <Card
            key={item.imdbid}
            title={item.title}
            description={item.synopsis}
            genre={item.genre[0]}
            img={item.imageurl}
          ></Card>
        ))}
    </div>
  );
}

export default App;
