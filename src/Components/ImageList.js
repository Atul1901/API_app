import "./ImageList.css";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  console.log("images:", images?.data?.result?.id);

  const imageData = images?.data?.results;

  console.log("image-data", imageData);

  const rerenderImages = imageData?.map((img) => {
    return <ImageShow key={img?.id} image={img}></ImageShow>;
  });
  // console.log("imge", images.data);
  // console.log("images", images?.data?.results);
  // console.log("images.length", images?.data?.results?.length);
  return <div className="image-list">{rerenderImages}</div>;
}
