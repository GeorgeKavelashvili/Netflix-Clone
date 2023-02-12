import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../../api/requests";
function Banner() {
  console.log("levan");
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  console.log("levan");
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://scontent.xx.fbcdn.net/v/t1.15752-9/248823872_490097691979611_4984808087219534299_n.png?stp=dst-png_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Kmzb1kCxNScAX9ZCyr4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTmb_czYqw0CNGtXfQPH1WOI5FF2DiVDm9SgZurRvvOew&oe=64109C40")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is test description of this banner This is test description of
          this banner This is test description of this banner This is test
          description of this bannerThis is test description of this bannerThis
          is test description of this bannerThis is test description of this
          banner`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
export default Banner;
