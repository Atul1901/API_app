import axios from "axios";

const options = {
  method: "GET",
  url: "https://ott-details.p.rapidapi.com/advancedsearch",
  headers: {
    "X-RapidAPI-Key": "bbe1157dfdmsh0629414c465f1d2p1094c5jsn8080e8ef2ecd",
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  },
};

const movieAPi = async () => {
  try {
    const response = await axios.get(`${options.url}`, {
      headers: options.headers,
    });
    return response;
    console.log("response", response);
  } catch (error) {
    console.error(error);
  }
};

export default movieAPi;

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
