import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./Api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // console.log("the term for search", term);
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}></ImageList>
    </div>
  );
}

export default App;
