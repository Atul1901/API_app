import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID NEBB-Us1cG3y2beOHb-HqMrU2myHm8kegkm-6vec5yM",
    },
    params: {
      query: term,
    },
  });
  console.log("resonse:", response.data.results);
  return response;
};

export default searchImages;
